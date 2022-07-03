package my.multimedia.one.params;

import com.alibaba.fastjson.JSONObject;

public class Params {

    private static JSONObject params;

    public static JSONObject put(String key,Object value){
        if(params == null){
            params = new JSONObject();
        }
        params.put(key,value);
        return params;
    }
}
