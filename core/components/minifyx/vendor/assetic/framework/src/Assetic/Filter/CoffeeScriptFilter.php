<?php namespace Assetic\Filter;

use Assetic\Contracts\Asset\AssetInterface;
use Assetic\Exception\FilterException;
use Assetic\Util\FilesystemUtils;

/**
 * Compiles CoffeeScript into Javascript.
 *
 * @link http://coffeescript.org/
 * @link https://www.tutorialspoint.com/coffeescript/coffeescript_command_line_utility
 * @author Kris Wallsmith <kris.wallsmith@gmail.com>
 */
class CoffeeScriptFilter extends BaseNodeFilter
{
    /**
     * @var string Path to the binary for this process based filter
     */
    protected $binaryPath = '/usr/bin/coffee';

    /*
     * Filter Options
     */

    /**
     * @var boolean Compile without a top-level function wrapper
     */
    private $bare;

    /**
     * @var boolean Supress the "Generated by" header
     */
    private $noHeader;

    public function setBare($bare)
    {
        $this->bare = $bare;
    }

    public function setNoHeader($noHeader)
    {
        $this->noHeader = $noHeader;
    }

    public function filterLoad(AssetInterface $asset)
    {
        $args = [];

        $args[] = '-cp';

        if ($this->bare) {
            $args[] = '--bare';
        }

        if ($this->noHeader) {
            $args[] = '--no-header';
        }

        $args[] = '{INPUT}';

        $result = $this->runProcess($asset->getContent(), $args);
        $asset->setContent($result);
    }
}
