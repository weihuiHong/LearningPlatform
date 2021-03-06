var ip: string = 'http://123.56.142.32:8080';
// var ip: string = 'http://192.168.1.105:8080';

export var Url: Map<string, string> = new Map();

Url.set('register', ip + '/user/register');
Url.set('login', ip + '/user/login');
Url.set('logout', ip + '/user/loginout');
Url.set('checkUsername', ip + '/user/checkUsername');
Url.set('checkJobNum', ip + '/user/checkJobNum');

Url.set('resourceTag', ip + '/tag/getTag');//获得过滤器中的标签
Url.set('resource', ip + '/resource/getResource');
Url.set('getResourceById', ip + '/resource/free/getResourceById');
Url.set('getResDiscuss', ip + '/resDiscuss/free/getResDiscuss');

Url.set('publicTag', ip + '/tag/free/getPublicTag');//获得首页免费课程的过滤词
Url.set('homeCourse', ip + '/resource/free/getSelectedResource');//获得首页的课程
Url.set('sideNav', ip + '/navigation/free/getNavigation');//左侧菜单栏

Url.set('recommendedResource', ip + '/resource/getRecommendedResource');//获得推荐课程

Url.set('search', ip + '/resource/free/SearchResByKeyWord');//搜索功能

Url.set('postList', ip + '/posting/free/getPosting');//获得帖子列表
Url.set('sendPost', ip + '/posting/post');//发帖
Url.set('getPostingById', ip + '/posting/free/getPostingById');//根据id获得帖子
Url.set('getPostingDis', ip + '/posting/free/getPostingDis');//获得帖子评论
Url.set('response', ip + '/posting/free/response');//回复帖子

Url.set('menu', ip + '/menu/menutree');