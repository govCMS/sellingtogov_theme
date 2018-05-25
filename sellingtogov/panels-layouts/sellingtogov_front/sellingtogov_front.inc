<?php
/**
 * @file
 * Defines the front panel layout
 *
 * The original foundation for the govCMS distribution is aGov; the Drupal distribution created by PreviousNext to provide a core set of elements, functionality and features that can be used to develop government websites
 *
 * @copyright Copyright(c) 2015 Commonwealth of Australia as represented by Department of Finance
 * @license GPL v2 http://www.fsf.org/licensing/licenses/gpl.html
 * @author Department of Finance
 */

/**
 * Implementation of hook_panels_layouts().
 */
$plugin = array(
  'title' => t('Selling To Gov Front Layout'),
  'category' => t('Selling To Gov'),
  'icon' => 'sellingtogov_front.png',
  'theme' => 'sellingtogov_front',
  'css' => 'sellingtogov_front.css',
  'admin css' => 'sellingtogov_front.admin.css',
  'regions' => array(
    'header' => t('Header region'),
    'left' => t('Left region'),
    'middle' => t('Middle region'),
    'right' => t('Right region'),
    'footer' => t('Footer region'),
  ),
);
