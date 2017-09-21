<?php namespace App\Models;
/**
 * Created by PhpStorm.
 * User: LIANQINGNAN447
 * Date: 2017-09-21
 * Time: 18:06
 */
class OperateFile
{

    static $_userInfo = '';

    /**
     * 存储用户信息
     *
     * @param
     */
    public static function make(){
        $myfile = fopen("../files/newfile.txt", "w") or die("Unable to open file!");
        $txt = "Bill Gates\n";
        fwrite($myfile, $txt);
        $txt = "Steve Jobs\n";
        fwrite($myfile, $txt);
        fclose($myfile);
    }

}