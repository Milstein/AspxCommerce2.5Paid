﻿<%@ Control Language="C#" AutoEventWireup="true" CodeFile="LatestItemSettings.ascx.cs"
    Inherits="Modules_AspxCommerce_AspxLatestItems_LatestItemSettings" %>
<div class="cssLatestSetting">
    <table>
        <thead>
            <tr><td class="sfLocale">
                Latest Item Settings</td></tr>
        </thead>
         <tr>
            <td>
                <asp:Label ID="lblEnableLatestItem" runat="server" Text="Enable Latest Item" 
                    meta:resourcekey="lblEnableLatestItemResource2"></asp:Label>
            </td>
            <td>
                <input type="checkbox" id="chkEnableLatestItem" />
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="lblLatestItemCount" runat="server" 
                    Text="Enter the Number of Products Displayed" 
                    meta:resourcekey="lblLatestItemCountResource2"></asp:Label>
            </td>
            <td>
                <input type="text" id="txtLatestItemCount" />
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="lblLatestItemInARow" runat="server" 
                    Text="Enter the Number of Products Displayed In Row" 
                    meta:resourcekey="lblLatestItemInARowResource2"></asp:Label>
            </td>
            <td>
                <input type="text" id="txtLatestItemInARow" />
            </td>
        </tr>
         <tr>
            <td>
                <asp:Label ID="lblShowLatestRss" runat="server" Text="Enable Rss" 
                    meta:resourcekey="lblShowLatestRssResource2"></asp:Label>
            </td>
            <td>
                <input type="checkbox" id="chkEnableLatestRss" />
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="lblLatestRssCount" runat="server" Text="Number of Rss To Show" 
                    meta:resourcekey="lblLatestRssCountResource2"></asp:Label>
            </td>
            <td>
                <input type="text" id="txtLatestRssCount" />
            </td>
        </tr>
         <tr>
            <td>
                <asp:Label ID="lblLatestRssPage" runat="server" Text="Latest Item Rss Page" 
                    meta:resourcekey="lblLatestRssPageResource2"></asp:Label>
            </td>
            <td>
                <input type="text" id="txtLatestRssPage" />
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" id="btnLatestSettingSave" class="sfLocale sfBtn" value="Save" />
            </td>
        </tr>
    </table>
</div>
<script type="text/javascript">
    (function($) {
        $.LatestItemSettingView = function(param) {
            param = $.extend
        ({
            Settings: ''
        }, param);
            var p = $.parseJSON(param.Settings);
            function aspxCommonObj() {
                var aspxCommonInfo = {
                    StoreID: AspxCommerce.utils.GetStoreID(),
                    PortalID: AspxCommerce.utils.GetPortalID(),
                    CultureName: AspxCommerce.utils.GetCultureName()
                };
                return aspxCommonInfo;
            }

            LatestItemSetting = {
                config: {
                    isPostBack: false,
                    async: false,
                    cache: false,
                    type: 'POST',
                    contentType: "application/json; charset=utf-8",
                    data: '{}',
                    dataType: 'json',
                    baseURL: p.ModuleServicePath + "LatestItemsHandler.ashx/",
                    method: "",
                    url: "",
                    ajaxCallMode: ""
                },

                ajaxCall: function(config) {
                    $.ajax({
                        type: LatestItemSetting.config.type,
                        contentType: LatestItemSetting.config.contentType,
                        cache: LatestItemSetting.config.cache,
                        async: LatestItemSetting.config.async,
                        url: LatestItemSetting.config.url,
                        data: LatestItemSetting.config.data,
                        dataType: LatestItemSetting.config.dataType,
                        success: LatestItemSetting.config.ajaxCallMode,
                        error: LatestItemSetting.config.ajaxFailure
                    });
                },

                BindLatestSetting: function() {
                    $("#chkEnableLatestItem").prop("checked", p.IsEnableLatestItem);
                    $("#txtLatestItemCount").val(p.LatestItemCount);
                    $("#txtLatestItemInARow").val(p.LatestItemInARow);
                    $("#chkEnableLatestRss").prop("checked", p.IsEnableLatestRss);
                    $("#txtLatestRssCount").val(p.LatestItemRssCount);
                    $("#txtLatestRssPage").val(p.LatestItemRssPage);
                },

                LatestItemSettingUpdate: function() {
                    var isEnableLatestItem = $("#chkEnableLatestItem").prop("checked");
                    var latestItemCount = $("#txtLatestItemCount").val();
                    var latestItemInARow = $("#txtLatestItemInARow").val();
                    var isEnableLatestRss = $("#chkEnableLatestRss").prop("checked");
                    var latestItemRssCount = $("#txtLatestRssCount").val();
                    var latestItemRssPage = $("#txtLatestRssPage").val();
                    var settingKeys = "IsEnableLatestItem*LatestItemCount*LatestItemInARow*IsEnableLatestRss*LatestItemRssCount*LatestItemRssPage";
                    var settingValues = isEnableLatestItem + '*' + latestItemCount + '*' + latestItemInARow + '*' + isEnableLatestRss + '*' + latestItemRssCount + '*' + latestItemRssPage;
                    var param = JSON2.stringify({ SettingValues: settingValues, SettingKeys: settingKeys, aspxCommonObj: aspxCommonObj() });
                    this.config.method = "LatestItemSettingUpdate";
                    this.config.url = this.config.baseURL + this.config.method;
                    this.config.data = param;
                    this.config.ajaxCallMode = LatestItemSetting.LatestItemSettingSuccess;
                    this.ajaxCall(this.config);
                },

                LatestItemSettingSuccess: function() {
                    SageFrame.messaging.show(getLocale(AspxLatestItem, "Setting Saved Successfully"), "Success");
                },

                init: function() {
                    LatestItemSetting.BindLatestSetting(); ;
                    $("#btnLatestSettingSave").click(function() {
                        LatestItemSetting.LatestItemSettingUpdate();
                    });
                }
            };
            LatestItemSetting.init();
        };
        $.fn.LatestItemSetting = function(p) {
            $.LatestItemSettingView(p);
        };
    })(jQuery);
    $(function() {
        $(".sfLocale").localize({
            moduleKey: AspxLatestItem
        });

        $(this).LatestItemSetting({
            Settings: '<%=Settings %>'
        });
    });
</script>
