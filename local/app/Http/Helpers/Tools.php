<?php

namespace App\Http\Helpers;

Class Tools
{
    /*
    * 判断数据类型是否正确
    * @param mix $p_mData
    * @param string $p_sDataType
    * @return true/false
    */
    static function chkDataType($p_mData, $p_sDataType){
        if('' == $p_mData){
            return false;
        }
        switch($p_sDataType){
            case 'i':
                return 0 < preg_match('/^-?[1-9]?[0-9]*$/', $p_mData) ? true : false;
            case 'url':
                return 0 < preg_match('/^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/', $p_mData) ? true : false;
            case 'email':
                return 0 < preg_match('/^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i', $p_mData) ? true : false;
            case 'idcard':
                return 0 < preg_match('/^[0-9]{15}$|^[0-9]{17}[a-zA-Z0-9]/', $p_mData) ? true : false;
            case 'area':
                return 0 < preg_match('/^\d+(\.\d{1,2})?$/', $p_mData) ? true : false;
            case 'money':
                return 0 < preg_match('/^\d+(\.\d{1,2})?$/', $p_mData) ? true : false;
            case 'length':
                return 0 < preg_match('/^\d+(\.\d{1,2})?$/', $p_mData) ? true : false;
            case 'mobile':
                return 0 < preg_match("/^((1[3-9][0-9])|200)[0-9]{8}$/", $p_mData) ? true : false;
            //return 0 < preg_match("/^((13[0-9])|(17[0-9])|145|147|(15[0-35-9])|(18[0-9])|200)[0-9]{8}$/", $p_mData) ? true : false;
            //return 0 < preg_match('/^1\d{10,10}$/', $p_mData) ? true : false;
            case 'phone':
                return 0 < preg_match('/^(\d{3,4}-?)?\d{7,8}$/', $p_mData) ? true : false;
            case 'chinese' :
                return 0 < preg_match("/^[\x{4e00}-\x{9fa5}]+$/u", $p_mData) ? true : false;
            default:
                return false;
        }
    }

    /**
     * 参数转换为string
     * @param  mix $mData
     * @return   mix
     */
    public static function convertToStr($mData)
    {
        switch (gettype($mData)) {
            case 'integer':
            case 'double':
                $mData = strval($mData);
                break;
            case 'array':
                foreach ($mData as $sKey => $aArr) {
                    $mData[$sKey] = self::convertToStr($aArr);
                }
                break;
            case 'string':
            default:
                break;
        }
        return $mData;
    }
    /**
     * 去除参数里的空格
     * @param  mix $mData
     * @return mix
     */
    public static function trimData($mData)
    {
        switch (gettype($mData)) {
            case 'string':
                $mData = preg_replace('/\s+/', '', $mData);
                break;
            case 'array':
                foreach ($mData as $sKey => $aArr) {
                    $mData[$sKey] = self::trimData($aArr);
                }
                break;
            default:
                break;
        }
        return $mData;
    }

    /**
     * 按照屏显长度截取字符串
     * @param  string $sData   要截取的文字
     * @param  int    $iLimit  限制中文字符的长度
     * @param  string $sSubfix 替换字符
     * @return string
     */
    public static function subStr($sData, $iLimit, $sSubfix = '...')
    {
        // 汉字的长度
        $iChL = preg_match_all('/[\x{4e00}-\x{9fa5}]/u', $sData, $aMatches);

        // 总长度
        $iLength = mb_strlen($sData);

        // 实际占屏幕的长度
        $iTotalLength = ($iLength - $iChL) + 2 * $iChL;

        $iLimit *= 2;

        if($iTotalLength > $iLimit){
            $aText = self::splitword($sData);

            $i = 0;
            foreach ($aText as $key => $text) {
                preg_match('/[\x{4e00}-\x{9fa5}]/u', $text, $aChMatch);
                if (!empty($aChMatch)) {
                    $i += 2;
                } else {
                    $i ++;
                }

                if ($i >= ($iLimit - mb_strlen($sSubfix))) {
                    $sNewText = implode('', array_slice($aText, 0, $key) ) . $sSubfix;
                    return $sNewText;
                }
            }
        } else {
            return $sData;
        }
    }

    /**
     * 驼峰式变量转换为下划线变量
     * @param $str
     * @return string
     */
    public static function humpToLine($str){
        if(preg_match('/^[a-z][A-Z][\w\d]+/', $str)) {
            $str = snake_case(substr(str_replace(['iAutoID', 'ID', 'NO'], ['iId', 'Id', 'No'], $str), 1));
        }
        return $str;
    }
    /**
     * 生成随机数
     * @param number $len	几位数
     * @param string $format	数字还是字符，或者混合
     * @return string
     */
    public static function randStr($len = 6, $format = 'ALL')
    {
        switch ($format) {
            case "URL":
                $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
                break;
            case 'ALL':
                $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-@#~';
                break;
            case 'CHAR':
                $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-@#~';
                break;
            case 'NUMBER':
                $chars = '0123456789';
                break;
            default :
                $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-@#~';
                break;
        }
        mt_srand((double) microtime() * 1000000 * getmypid());
        $password = "";
        while (strlen($password) < $len)
            $password.=substr($chars, (mt_rand() % strlen($chars)), 1);
        return $password;
    }

}