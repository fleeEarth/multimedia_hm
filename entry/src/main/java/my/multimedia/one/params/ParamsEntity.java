package my.multimedia.one.params;

/**
 * 参数类
 */
public class ParamsEntity {

    private Object data;

    private String key;

    private String method;

    public ParamsEntity() {
    }

    public ParamsEntity(String method) {
        this.method = method;
    }

    public ParamsEntity(Object data) {
        this.data = data;
    }

    public ParamsEntity(Object data,String key) {
        this.data = data;
        this.key = key;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }
}


