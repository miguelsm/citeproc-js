/*
 * Copyright (c) 2009 and 2010 Frank G. Bennett, Jr. All Rights Reserved.
 *
 * The contents of this file are subject to the Common Public
 * Attribution License Version 1.0 (the “License”); you may not use
 * this file except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://bitbucket.org/fbennett/citeproc-js/src/tip/LICENSE.
 *
 * The License is based on the Mozilla Public License Version 1.1 but
 * Sections 14 and 15 have been added to cover use of software over a
 * computer network and provide for limited attribution for the
 * Original Developer. In addition, Exhibit A has been modified to be
 * consistent with Exhibit B.
 *
 * Software distributed under the License is distributed on an “AS IS”
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See
 * the License for the specific language governing rights and limitations
 * under the License.
 *
 * The Original Code is the citation formatting software known as
 * "citeproc-js" (an implementation of the Citation Style Language
 * [CSL]), including the original test fixtures and software located
 * under the ./std subdirectory of the distribution archive.
 *
 * The Original Developer is not the Initial Developer and is
 * __________. If left blank, the Original Developer is the Initial
 * Developer.
 *
 * The Initial Developer of the Original Code is Frank G. Bennett,
 * Jr. All portions of the code written by Frank G. Bennett, Jr. are
 * Copyright (c) 2009 and 2010 Frank G. Bennett, Jr. All Rights Reserved.
 */
dojo.provide("std.date");
doh.register("std.date", [
    function(){
        var test = new StdRhinoTest("date_LocalizedNumericDefaultWithAffixes");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-de-AT");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-hu-HU");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_SortEmptyDatesBibliography");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedNumericYear");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_NonexistentSortReverseCitation");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_NegativeDateSortViaMacro");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-el-GR");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-en-US");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-de-DE");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-zh-TW");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-nl-NL");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_YearSuffixDelimiter");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-fr-FR");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-zh-CN");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedTextMonthFormOverride");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_TextFormFulldateMonthRange");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedTextDefault");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_SortEmptyDatesCitation");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-ko-KR");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-vi-VN");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_DateBC");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_IgnoreNonexistentSort");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-es-ES");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedNumericDefault");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_NoDate");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedTextYearWithAffixes");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_KeyVariable");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-cs-CZ");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_DateNoDate");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_SeasonSubstituteInGroup");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-et-EE");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_DateAD");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedTextYearMonth");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_TextFormYeardateYearRangeOpen");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedWithInStyleFormatting");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_TextFormMonthdateYearRange");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedTextInStyleLocaleWithTextCase");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedTextYear");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-pl-PL");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedNumericYearRange");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-sl-SL");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_MaskNonexistentWithCondition");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-ar-AR");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-th-TH");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_TextFormFulldateDayRange");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-da-DK");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-bg-BG");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_TextFormFulldateYearRange");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LongMonth");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_NegativeDateSort");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_RawParseSimpleDate");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-uk-UA");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_TextFormMonthdateMonthRange");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-sr-RS");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedNumericYearMonthMissingMonth");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-ro-RO");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-ja-JP");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-de-CH");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-pt-BR");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedTextYearMonthMissingMonth");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_Uncertain");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LiteralFailGracefullyIfNoValue");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-it-IT");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedTextDefaultMissingDay");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedTextDefaultWithAffixes");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-sv-SE");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_NonexistentSortReverseBibliography");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_OtherAlone");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-mn-MN");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_TextFormYeardateYearRange");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_NegativeDateSortViaMacroOnYearMonthOnly");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedNumericDefaultMissingDay");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-sk-SK");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-ru-RU");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedNumericYearWithAffixes");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_OtherWithDate");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-nb-NO");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-is-IS");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-he-IL");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-tr-TR");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedNumericYearMonth");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-ca-AD");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-pt-PT");
        doh.assertEqual(test.result, test.run());
    }, 
    function(){
        var test = new StdRhinoTest("date_LocalizedDateFormats-af-ZA");
        doh.assertEqual(test.result, test.run());
    }, 
]);
