﻿/*
AspxCommerce® - http://www.aspxcommerce.com
Copyright (c) 2011-2014 by AspxCommerce

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OF OTHER DEALINGS IN THE SOFTWARE. 
*/



using System;
using System.Collections.Generic;
using System.Web;
using AspxCommerce.Core;
using SageFrame.Web;
using SageFrame.Web.Utilities;
using System.Data;

public partial class Modules_AspxTaxManagement_TaxRate : BaseAdministrationUserControl
{
    public int StoreID, PortalID;
    public string UserName, CultureName;
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            if (!IsPostBack)
            {
                IncludeCss("TaxRate", "/Templates/" + TemplateName + "/css/GridView/tablesort.css", "/Templates/" + TemplateName + "/css/MessageBox/style.css");
                IncludeJs("TaxRate", "/js/FormValidation/jquery.validate.js", "/js/GridView/jquery.grid.js", "/js/GridView/SagePaging.js", "/js/GridView/jquery.global.js",
                    "/js/GridView/jquery.dateFormat.js", "/js/MessageBox/jquery.easing.1.3.js", "/js/MessageBox/alertbox.js", "/js/ExportToCSV/table2CSV.js", "/Modules/AspxCommerce/AspxTaxManagement/js/TaxRate.js");

                StoreID = GetStoreID;
                PortalID = GetPortalID;
                UserName = GetUsername;
                CultureName = GetCurrentCultureName;
            }
            IncludeLanguageJS();

        }
        catch (Exception ex)
        {
            ProcessException(ex);
        }
    }

    protected void Page_Init(object sender, EventArgs e)
    {
        try
        {
            InitializeJs();
        }
        catch (Exception ex)
        {
            ProcessException(ex);
        }
    }

    private void InitializeJs()
    { 
        Page.ClientScript.RegisterClientScriptInclude("JTablesorter", ResolveUrl("~/js/GridView/jquery.tablesorter.js"));
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        try
        {
            DataTable resultsData = new DataTable();
            AspxCommonInfo aspxCommonObj = new AspxCommonInfo();
            aspxCommonObj.StoreID = GetStoreID;
            aspxCommonObj.PortalID = GetPortalID;
            aspxCommonObj.CultureName = GetCurrentCultureName;
            List<KeyValuePair<string, object>> parameter = CommonParmBuilder.GetParamSPC(aspxCommonObj);
            string filename = "MyReport_TaxRate" + "_" + DateTime.Now.ToString("M_dd_yyyy_H_M_s") + ".xls";
            string filePath = HttpContext.Current.Server.MapPath(ResolveUrl(this.AppRelativeTemplateSourceDirectory)) + filename;
            ExportLargeData excelLdata = new ExportLargeData();
            excelLdata.ExportTOExcel(filePath, "[dbo].[usp_Aspx_GetTaxRatesForExport]", parameter, resultsData);

        }
        catch (Exception ex)
        {
            ProcessException(ex);
        }
    }

    protected void ButtonTaxRate_Click(object sender, System.EventArgs e)
    {
        try
        {
            AspxCommonInfo aspxCommonObj = new AspxCommonInfo();
            aspxCommonObj.StoreID = GetStoreID;
            aspxCommonObj.PortalID = GetPortalID;
            aspxCommonObj.CultureName = GetCurrentCultureName;
            List<KeyValuePair<string, object>> parameter = CommonParmBuilder.GetParamSPC(aspxCommonObj);
            string filename = "MyReport_StoreTax" + "_" + DateTime.Now.ToString("M_dd_yyyy_H_M_s") + ".csv";
            string filePath = HttpContext.Current.Server.MapPath(ResolveUrl(this.AppRelativeTemplateSourceDirectory)) + filename;
            ExportLargeData csvLdata = new ExportLargeData();
            csvLdata.ExportToCSV(true, ",", "[dbo].[usp_Aspx_GetTaxRatesForExport]", parameter, filePath);
        }
        catch (Exception ex)
        {
            ProcessException(ex);
        }
    }
}
