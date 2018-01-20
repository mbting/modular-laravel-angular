<?php

namespace App\Http\Controllers;

use App\Http\Responses\Response;
use Module;

class HomeController extends Controller {

  public function index() {
    return Response::success();
  }

  public function sidebar() {
    $nav = [];
    foreach (Module::collections() as $module) {
      $config = json_decode(file_get_contents($module->getPath() . DIRECTORY_SEPARATOR . 'module.json'));
      $nav[] = ['name' => $module->getName(), 'children' => $config->action];
    }
    return Response::success($nav);
  }

}
