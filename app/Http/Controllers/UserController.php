<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use function Symfony\Component\String\u;

class UserController extends Controller
{
    public function index()
    {
        $users = User::orderBy('id','desc')->get();
        return response()->json($users);
    }
    public function store(Request $request)
    {
        $request->validate([
           'name'=>'required',
           'email'=>'required|email',
        ]);
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;

        $user->save();
        return response()->json(['message'=>'User inserted','user'=>$user],200);
    }
}
