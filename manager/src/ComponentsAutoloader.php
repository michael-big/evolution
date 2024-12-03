<?php

namespace EvolutionCMS\Manager;

use Composer\ClassMapGenerator\ClassMapGenerator;
use Exception;

class ComponentsAutoloader
{
    /**
     * @var string
     */
    protected string $path;

    /**
     * @var array
     */
    private array $paths = [];

    /**
     * @param string $path
     *
     * @throws Exception
     */
    public function __construct(string $path)
    {
        if (is_dir($path)) {
            $this->path = $path;
        } else {
            throw new Exception("Path $path is not a directory");
        }
    }

    /**
     * @return void
     * @throws Exception
     */
    public function register()
    {
        if (!file_exists($this->path . 'classmap.php') || !is_readable($this->path . 'classmap.php')) {
            $this->build();
        }

        $classmap = require $this->path . 'classmap.php';

        spl_autoload_register(function ($class) use ($classmap) {
            if (isset($classmap[$class])) {
                include $classmap[$class];
            }
        });
    }

    /**
     * @param string $path
     *
     * @return void
     * @throws Exception
     */
    public function addPath(string $path)
    {
        if (is_dir($path)) {
            $this->paths[] = $path;
        } else {
            throw new Exception("Path $path is not a directory");
        }
    }

    /**
     * @return void
     * @throws Exception
     */
    public function build()
    {
        $classmap = var_export($this->getClassmap(), true);
        file_put_contents($this->path . 'classmap.php', "<php\nreturn $classmap;\n");
    }

    /**
     * @return array
     * @throws Exception
     */
    public function getClassmap(): array
    {
        if (!empty($this->paths)) {
            $generator = new ClassMapGenerator;
            foreach ($this->paths as $path) {
                $generator->scanPaths($path);
            }

            return $generator->getClassMap()->getMap();
        } else {
            throw new Exception("No paths to scan");
        }
    }
}
