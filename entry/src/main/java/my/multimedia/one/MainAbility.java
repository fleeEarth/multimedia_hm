package my.multimedia.one;

import com.alibaba.fastjson.JSONObject;
import my.multimedia.one.params.Params;
import my.multimedia.one.params.ParamsEntity;
import my.multimedia.one.utils.OkHttpClientUtil;
import ohos.ace.ability.AceAbility;
import ohos.aafwk.content.Intent;

public class MainAbility extends AceAbility {
    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
//        ParamsEntity paramsEntity = new ParamsEntity("/dirService/queryDicList");
//        paramsEntity.setData(Params.put("filePath",""));
//        JSONObject result = OkHttpClientUtil.postJson(paramsEntity);
//        System.out.println(result);
    }

    @Override
    public void onStop() {
        super.onStop();
    }
}
