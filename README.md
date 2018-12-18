## 有个bug
lazyload加载js有个问题，需要存在localstorage中对js被加载了两次
### 解决方法：
1.不用lazyload，直接让js串型加载

2.不用localstorage，用ETag

3.lazyload的同时，把js保存到localstorage中，目前还没想出来怎么写