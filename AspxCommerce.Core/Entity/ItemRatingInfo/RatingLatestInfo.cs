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
using System.Runtime.Serialization;

namespace AspxCommerce.Core
{
    [DataContract]
    [Serializable]
    public class RatingLatestInfo
    {
        private int _rowTotal;
        private int _itemReviewID;
        private System.Nullable<int> _itemID;
        private string _username;
        private decimal _ratingAverage;        
        private string _viewFromIP;
        private string _reviewSummary;
        private string _review;
        private string _status;
        private string _itemName;
        private string _addedOn;
        private string _addedBy;
        private int _statusID;
        private int _itemRatingID;
        private string _itemRatingCriteria;        
        private decimal _ratingValue;

        public RatingLatestInfo()
        {
        }
        [DataMember]
        public int RowTotal
        {
            get { return _rowTotal; }
            set { _rowTotal = value; }
        }
        [DataMember]
        public int ItemReviewID
        {
            get
            {
                return this._itemReviewID;
            }
            set
            {
                if ((this._itemReviewID != value))
                {
                    this._itemReviewID = value;
                }
            }
        }
        [DataMember]
        public System.Nullable<int> ItemID
        {
            get
            {
                return this._itemID;
            }
            set
            {
                if ((this._itemID != value))
                {
                    this._itemID = value;
                }
            }
        }
        [DataMember]
        public string Username
        {
            get
            {
                return this._username;
            }
            set
            {
                if ((this._username != value))
                {
                    this._username = value;
                }
            }
        }
        [DataMember]
        public decimal RatingAverage
        {
            get
            {
                return this._ratingAverage;
            }
            set
            {
                if ((this._ratingAverage != value))
                {
                    this._ratingAverage = value;
                }
            }
        }
        [DataMember]
        public string ViewFromIP
        {
            get
            {
                return this._viewFromIP;
            }
            set
            {
                if ((this._viewFromIP != value))
                {
                    this._viewFromIP = value;
                }
            }
        }
        [DataMember]
        public string ReviewSummary
        {
            get
            {
                return this._reviewSummary;
            }
            set
            {
                if ((this._reviewSummary != value))
                {
                    this._reviewSummary = value;
                }
            }
        }
        [DataMember]
        public string Review
        {
            get
            {
                return this._review;
            }
            set
            {
                if ((this._review != value))
                {
                    this._review = value;
                }
            }
        }
        [DataMember]
        public string Status
        {
            get
            {
                return this._status;
            }
            set
            {
                if ((this._status != value))
                {
                    this._status = value;
                }
            }
        }
        [DataMember]
        public string ItemName
        {
            get
            {
                return this._itemName;
            }
            set
            {
                if ((this._itemName != value))
                {
                    this._itemName = value;
                }
            }
        }
        [DataMember]
        public string AddedOn
        {
            get
            {
                return this._addedOn;
            }
            set
            {
                if ((this._addedOn != value))
                {
                    this._addedOn = value;
                }
            }
        }
        [DataMember]
        public string AddedBy
        {
            get
            {
                return this._addedBy;
            }
            set
            {
                if ((this._addedBy != value))
                {
                    this._addedBy = value;
                }
            }
        }
        [DataMember]
        public int StatusID
        {
            get
            {
                return this._statusID;
            }
            set
            {
                if ((this._statusID != value))
                {
                    this._statusID = value;
                }
            }
        }
        [DataMember]
        public int ItemRatingID
        {
            get
            {
                return this._itemRatingID;
            }
            set
            {
                if ((this._itemRatingID != value))
                {
                    this._itemRatingID = value;
                }
            }
        }
        [DataMember]
        public string ItemRatingCriteria
        {
            get
            {
                return this._itemRatingCriteria;
            }
            set
            {
                if ((this._itemRatingCriteria != value))
                {
                    this._itemRatingCriteria = value;
                }
            }
        }
        [DataMember]
        public decimal RatingValue
        {
            get
            {
                return this._ratingValue;
            }
            set
            {
                if ((this._ratingValue != value))
                {
                    this._ratingValue = value;
                }
            }
        }
    }
}
