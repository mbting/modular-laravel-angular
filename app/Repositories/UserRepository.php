<?php

namespace App\Repositories;

use App\Http\Responses\Response;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use JWTAuth;
use Validator;

class UserRepository {

  public function doLogin(Request $request) {
    // validate
    $validator = Validator::make($request->all(), ['username' => 'required', 'password' => 'required']);
    if ($validator->fails()) { return Response::failure($validator->errors()); }

    // authenticate
    try {
      if ($token = JWTAuth::attempt(['username' => $request->get('username'), 'password' => $request->get('password')])) {
        $user = User::where('username', $request->get('username'))->first();
        $user->token = $token;
        return Response::success($user);
      }
    } catch (Exception $e) {
      return Response::failure('Authentication Failed');
    }

    return Response::failure('Authentication Failed');
  }


}
