<?php namespace App\Http\Controllers;

use App\Models\Database\User;
use App\Models\OperateFile;
use App\Http\Helpers\Tools;
class FisController extends Controller {

    /*
    |--------------------------------------------------------------------------
    | Welcome Controller
    |--------------------------------------------------------------------------
    |
    | This controller renders the "marketing page" for the application and
    | is configured to only allow guests. Like most of the other sample
    | controllers, you are free to modify or remove it as you desire.
    |
    */

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('guest');
    }

    /**
     * Show the application welcome screen to the user.
     *
     * @return Response
     */
    public function index()
    {
        $data = array(array("key"=>5,"value"=>"ldkjasjfl"),array("key"=>3,"value"=>"ldkjasjfl"),array("key"=>4,"value"=>"ldkjasjfl"),array("key"=>2,"value"=>"ldkjasjfl"));
        return view('index',["data"=>$data]);
    }

    public function test()
    {
        OperateFile::make();
        return view('test',['data' => Tools::randStr(12,'URL')]);
    }
    public function vue()
    {

        $users = User::getUsers();
        return view('vue', ['users' => $users]);
    }
}
