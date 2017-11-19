<?php

namespace Modules\Sample\Http\Controllers;

use App\Http\Responses\Response;
use Illuminate\Routing\Controller;

class SampleController extends Controller {

  public function index() {
    return Response::success([1,2,3,4,5,6,7,8]);
  }
}
