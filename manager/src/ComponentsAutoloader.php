<?php

namespace EvolutionCMS\Manager;

use Composer\ClassMapGenerator\ClassMapGenerator;

class ComponentsAutoloader
{
    private $paths = [];

    public function __construct($path)
    {
        $path = $path;
        if(is_dir($path)) {
            $this->path = $path;
        } else {
            throw new \Exception("Path $path is not a directory");
        }
    }

    public function register()
    {
        if(!file_exists($this->path . 'classmap.php') || !is_readable($this->path . 'classmap.php'))  {
            $this->build();
        }
        $classmap = require $this->path . 'classmap.php';
        spl_autoload_register(function ($class) use ($classmap) {
            if(isset($classmap[$class])) {
                include $classmap[$class];
            }
        });
    }

    public function addPath($path)
    {
        if(is_dir($path)) {
            $this->paths[] = $path;
        } else {
            throw new \Exception("Path $path is not a directory");
        }
    }

    public function build()
    {
        $classmap = var_export($this->getClassmap(), true);
        file_put_contents($this->path . 'classmap.php', "<php\nreturn {$classmap};\n");
    }

    public function getClassmap()
    {
        if(!empty($this->paths)) {
            $generator = new ClassMapGenerator;
            foreach ($this->paths as $path) {
                $generator->scanPaths($path);
            }

            return $generator->getClassMap()->getMap();
        } else {
            throw new \Exception("No paths to scan");
        }
    }
}
