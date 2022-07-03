package my.multimedia.one.utils;

import com.alibaba.fastjson.JSONObject;
import my.multimedia.one.params.ParamsEntity;
import okhttp3.*;

import java.util.concurrent.TimeUnit;

/**
 * 网络请求
 */
public class OkHttpClientUtil {

    private static OkHttpClient client = new OkHttpClient();

    private static final Long CONNECTION_TIMEOUT = 90L;

    private static final String url = "http://127.0.0.1:8080/multimedia";

    static {
        client.newBuilder().connectTimeout(CONNECTION_TIMEOUT, TimeUnit.SECONDS);
    }

    /**
     * POST请求
     * @param params
     * @return
     */
    public static JSONObject postJson(ParamsEntity params) {
        try{
            RequestBody requestBody = RequestBody.create(params.toString(), MediaType.parse("application/json;charset=utf-8"));
            Request request = new Request.Builder().url(url + params.getMethod()).post(requestBody).build();
            Response response = client.newCall(request).execute();
            return JSONObject.parseObject(response.body().string());
        }catch (Exception e){
            return null;
        }
    }


}
