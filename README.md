# libre_xe_skin
리브레 xe 스킨

어두운 화면 관련 XE 수정
common/tpl/common_layout.html에서
<html lang="{$lang_type}">를 아래로 수정
<html lang="{$lang_type}" class="darklibre"|cond="$_COOKIE['darklibre']">


이슈는 [리브레 이슈트래커](https://github.com/librewiki/issue/issues/new)로 부탁드립니다.
