<?php
/**
 * @file
 *
 * The original foundation for the govCMS distribution is aGov; the Drupal distribution created by PreviousNext to provide a core set of elements, functionality and features that can be used to develop government websites
 *
 * @copyright Copyright(c) 2015 Commonwealth of Australia as represented by Department of Finance
 * @license GPL v2 http://www.fsf.org/licensing/licenses/gpl.html
 * @author Department of Finance
 *
 * Available variables
 * -------------------
 * $content array of panels.
 */

?>


<div class="sellingtogov-front-layout clearfix" <?php if (!empty($css_id)) : print "id=\"$css_id\""; endif; ?>>

  <?php if (!empty($content['header'])) : ?>
    <?php print $content['header'];?>
  <?php endif; ?>

  <?php if (!empty($content['left'])) : ?>
    <div class="sellingtogov-front-left sellingtogov-front-col">
      <?php print $content['left'];?>
    </div>
  <?php endif; ?>

  <?php if (!empty($content['middle'])) : ?>
    <div class="sellingtogov-front-middle sellingtogov-front-col">
      <?php print $content['middle'];?>
    </div>
  <?php endif; ?>

  <?php if (!empty($content['right'])) : ?>
    <div class="sellingtogov-front-right sellingtogov-front-col">
      <?php print $content['right'];?>
    </div>
  <?php endif; ?>

  <?php if (!empty($content['footer'])) : ?>
    <?php print $content['footer'];?>
  <?php endif; ?>

</div>
