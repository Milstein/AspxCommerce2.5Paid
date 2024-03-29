﻿<%@ Control Language="C#" AutoEventWireup="true" CodeFile="AppointmentSuccess.ascx.cs"
    Inherits="Modules_AspxCommerce_AspxServiceItems_AppointmentSuccess" %>

<script type="text/javascript">
    //<![CDATA[
    var storeLogo = "<%=StoreLogoUrl %>";
    $(function() {
        $(".sfLocale").localize({
            moduleKey: AspxServiceLocale
        });
    });
    $(document).ready(function() {
        $('#btnPrint').click(function() {
            printPage();
        });
        $("#successStoreLogo").attr('src', AspxCommerce.utils.GetAspxRootPath() + storeLogo);
    });
    $(window).load(function() {       
            });
    function printPage() {
        var content = $('#<%=divPage.ClientID%>').html();
        var pwin = window.open('', 'print_content', 'width=100,height=100');
        pwin.document.open();
        pwin.document.write('<html><body onload="window.print()">' + content + '</body></html>');
        pwin.document.close();
        setTimeout(function() { pwin.close(); }, 5000);
    }
    //]]>
</script>

<div>
    <asp:UpdateProgress ID="UpdateProgress1" runat="server" DisplayAfter="0">
        <ProgressTemplate>
            <div class="cssClassLoadingBG">
                &nbsp;</div>
            <div class="cssClassloadingDiv">
                <asp:Image ID="imgPrgress" runat="server" AlternateText="Loading..." ToolTip="Loading..."
                    meta:resourcekey="imgPrgressResource1" />
                <br />
                <asp:Label ID="lblPrgress" runat="server" Text="Please wait..." meta:resourcekey="lblPrgressResource1"></asp:Label>
            </div>
        </ProgressTemplate>
    </asp:UpdateProgress>
    <div id="divPageOuter" class="PageOuter">
        <div id="error" runat="server">
            <asp:Label ID="lblerror" runat="server" meta:resourcekey="lblerrorResource1"></asp:Label>
        </div>
        <div id="divClickAway">
            <div class="sfButtonwrapper">
                <asp:HyperLink ID="hlnkHomePage" runat="server" class="sfLocale" meta:resourcekey="hlnkHomePageResource1"
                    Text="Back to Home page"></asp:HyperLink>
                <button id="btnPrint" type="button" class="sfBtn">
                    <span class="sfLocale icon-print">Print</span></button>
            </div>
        </div>
        <div id="divPage" class="Page" runat="server">
            <div id="divThankYou" class="sfLocale">
                Thank you for your appointment.</div>
                 <div style="float: right">
                    <img id="successStoreLogo" src="" alt="StoreLogo" title="StoreLogo" height="73px" width="125px"/>
                </div>
            <hr class="HrTop" />
            <div id="divReceiptMsg" class="sfLocale">
                You may print this receipt page for your records.
            </div>
            <div class="SectionBar sfLocale">
                <span class="sfLocale">Appointment Information</span></div>
            <table id="tablePaymentDetails2Rcpt" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="LabelColInfo1R sfLocale">
                        <span class="sfLocale">Service Name:</span>
                    </td>
                    <td>
                        <asp:Label ID="lblServiceName" runat="server" meta:resourcekey="lblServiceNameResource1"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="LabelColInfo1R sfLocale">
                        <span class="sfLocale">Service Product:</span>
                    </td>
                    <td>
                        <asp:Label ID="lblServiceProduct" runat="server" meta:resourcekey="lblServiceProductResource1"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="LabelColInfo1R sfLocale">
                        <span class="sfLocale">Provider Name:</span>
                    </td>
                    <td>
                        <asp:Label ID="lblServiceProviderName" runat="server" meta:resourcekey="lblServiceProviderNameResource1"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="LabelColInfo1R sfLocale">
                        <span class="sfLocale">Store Location:</span>
                    </td>
                    <td>
                        <asp:Label ID="lblStoreLocation" runat="server" meta:resourcekey="lblStoreLocationResource1"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="LabelColInfo1R sfLocale">
                        <span class="sfLocale">Product Price:</span>
                    </td>
                    <td>
                        <asp:Label ID="lblProductPrice" runat="server" CssClass="cssClassFormatCurrency"
                            meta:resourcekey="lblProductPriceResource1"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="LabelColInfo1R sfLocale">
                        <span class="sfLocale">Service Duration:</span>
                    </td>
                    <td>
                        <asp:Label runat="server" ID="lblServiceDuration" ></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="LabelColInfo1R sfLocale">
                        Date:
                    </td>
                    <td class="DataColInfo1R">
                        <asp:Label ID="lblDate" runat="server" meta:resourcekey="lblDateResource1"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="LabelColInfo1R sfLocale">
                        <span class="sfLocale">Time:</span>
                    </td>
                    <td class="DataColInfo1R">
                        <asp:Label ID="lblTime" runat="server" meta:resourcekey="lblTimeResource1"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="LabelColInfo1R sfLocale">
                        <span class="sfLocale">Invoice Number:</span>
                    </td>
                    <td class="DataColInfo1R">
                        <asp:Label ID="lblInvoice" runat="server" meta:resourcekey="lblInvoiceResource1"></asp:Label>
                    </td>
                </tr>
            </table>
            <%--<hr id="hrBillingShippingBefore">--%>
            <div id="divOrderDetailsBottomR">
                <table id="tableOrderDetailsBottom">
                    <tr>
                        <td class="LabelColTotal">
                        </td>
                        <td class="DescrColTotal">
                            <asp:Label ID="lblTotal" runat="server" meta:resourcekey="lblTotalResource1"></asp:Label>
                        </td>
                        <td class="DataColTotal">
                        </td>
                    </tr>
                </table>
                <!-- tableOrderDetailsBottom -->
            </div>
            <div id="divOrderDetailsBottomSpacerR">
            </div>
            <div class="SectionBar">
            </div>
            <table class="PaymentSectionTable" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="LabelColInfo2R sfLocale">
                        <span class="sfLocale">Transaction ID:</span>
                    </td>
                    <td class="DataColInfo2R">
                        <asp:Label ID="lblTransaction" runat="server" meta:resourcekey="lblTransactionResource1"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td class="LabelColInfo2R">
                        <span class="sfLocale">Payment Method:</span>
                    </td>
                    <td class="DataColInfo2R">
                        <asp:Label ID="lblPaymentMethod" runat="server" meta:resourcekey="lblPaymentMethodResource1"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <span class="sfLocale sfEmailSuccess">Email Notification has been send for confirmation.</span>
                    </td>
                </tr>
            </table>
            <div class="PaymentSectionSpacer">
            </div>
        </div>
        <!-- entire BODY -->
    </div>
</div>
