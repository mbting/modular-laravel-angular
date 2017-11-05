<?php

namespace App\Http\Controllers;

use App\Http\Responses\Response;

class HomeController extends Controller {

  public function index() {
    return Response::success();
  }

}
