<?php

namespace App\Http\Controllers;

use App\Http\Responses\Response;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use JWTAuth;


class AuthenticationController extends Controller {

  private $user;

  public function __construct(UserRepository $user) {
    $this->user = $user;
  }

  public function doLogin(Request $request) {
    return $this->user->doLogin($request);
  }

  public function doLogout() {
    JWTAuth::invalidate();
    return Response::success();
  }

}
