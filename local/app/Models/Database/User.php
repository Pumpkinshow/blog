<?php namespace App\Models\Database;
use DB;
/**
 * Created by PhpStorm.
 * User: LIANQINGNAN447
 * Date: 2017-09-21
 * Time: 17:46
 */

class User
{

    static $_userInfo = '';

    /**
     * 存储用户信息
     *
     * @param
     */
    public static function getUsers(){
        return $users = DB::table('q_user')->get();
    }

}