/* Ominature code starts */


var downloadType="";
        var s_lang = "English";
        var s_channel = "";
        var s_hier1 = "";
        var s_prop1 = "";
        var s_prop10 = "";
        var s_prop13 = "";
        var s_prop16 = "";
        var s_prop17 = "";
        var s_pageName = "" ;
        var s_prop1 = "";
        var s_account = "";
       //var s_account = "DEVWBTSTSAMP2";
        function OmnitureControlClick(controlname, downloadType,fileName)
        {
            var pathname = window.location.pathname
            var index = pathname.lastIndexOf('/') + 1;
            var length = pathname.length - 5;
            var pagename = pathname.substring(index, length);

            var sTitle = document.title;
            var asTitleParts = sTitle.split("-");



            s_account = "DEVWBTSTSAMP2"
             //s_account = "wbnispmydbnk,wbglobalint";
            s_channel = "DEC myDataBank INT";
            s_hier1 = "DEC,DEC myDataBank INT";

            while (sTitle.indexOf(",") > -1)
                sTitle = sTitle.replace(",", "");

            s_pageName = sTitle + " download excel";
            s_prop1 = sTitle + " download excel";
            s_hier1 += ", " + sTitle + " download excel";


            s_prop10 = "Live";
            s_prop13 = "DEC";
            s_prop16 = s_lang;
            s_prop17 = s_lang;
                        s_linkType = "d";
            s_linkName = pagename + " "+"page download";
			 
            s_gs_DataBank(s_account,fileName);
        }




        function s_gs_DataBank(un,fileName) {
            un = un.toLowerCase();
            var dyas = s_gg('dynamicAccountSelection'),
        dyal = s_gg('dynamicAccountList'),
        dyam = s_gg('dynamicAccountMatch');
            if (dyas && dyal) un = s_dyas(un, dyal, dyam);
            s_un = un
            var trk = 1,
        tm = new Date,
        sed = Math && Math.random ? Math.floor(Math.random() * 10000000000000) : tm.getTime(),
        sess = 's' + Math.floor(tm.getTime() / 10800000) % 10 + sed,
        yr = tm.getYear(),
        vt = tm.getDate() + '/' + tm.getMonth() + '/' + (yr < 1900 ? yr + 1900 : yr) + ' ' + tm.getHours() + ':' + tm.getMinutes() + ':' + tm.getSeconds() + ' ' + tm.getDay() + ' ' + tm.getTimezoneOffset(),
       tfs = s_gtfs(),
        vt, ta = '',
        q = '',
        qs = '';
            if (!s_q) {
                var tl = tfs.location,
            s = '',
            c = '',
            v = '',
            p = '',
            bw = '',
            bh = '',
            j = '1.0',
            k = s_c_w('s_cc', 'true', 0) ? 'Y' : 'N',
            hp = '',
            ct = '',
            iepl = s_gg('iePlugins'),
            pn = 0,
            ps;
                if (s_apv >= 4) s = screen.width + 'x' + screen.height;
                if (s_isns || s_isopera) {
                    if (s_apv >= 3) {
                        j = '1.1';
                        v = s_n.javaEnabled() ? 'Y' : 'N';
                        if (s_apv >= 4) {
                            j = '1.2';
                            c = screen.pixelDepth;
                            bw = s_wd.innerWidth;
                            bh = s_wd.innerHeight;
                            if (s_apv >= 4.06) j = '1.3'
                        }
                    }
                    s_pl = s_n.plugins
                } else if (s_isie) {
                    if (s_apv >= 4) {
                        v = s_n.javaEnabled() ? 'Y' : 'N'
                        j = '1.2';
                        c = screen.colorDepth;
                        if (s_apv >= 5) {
                            bw = s_d.documentElement.offsetWidth;
                            bh = s_d.documentElement.offsetHeight;
                            j = '1.3';
                            if (!s_ismac && s_d.body) {
                                s_d.body.addBehavior("#default#homePage")
                                hp = s_d.body.isHomePage(tl) ? "Y" : "N";
                                s_d.body.addBehavior("#default#clientCaps");
                                ct = s_d.body.connectionType;
                                if (iepl) {
                                    s_pl = new Array;
                                    s_pt(iepl, ',', s_iepf, '')
                                }
                            }
                        }
                    } else r = '';
                    if (!s_pl && iepl) s_pl = s_n.plugins
                }
                if (s_pl) while (pn < s_pl.length && pn < 30) {
                    ps = s_fl(s_pl[pn].name, 100) + ';';
                    if (p.indexOf(ps) < 0) p += ps;
                    pn++
                }
                s_q = (s ? '&s=' + s_ape(s) : '') + (c ? '&c=' + s_ape(c) : '') + (j ? '&j=' + j : '') + (v ? '&v=' + v : '') + (k ? '&k=' + k : '') + (
        bw ? '&bw=' + bw : '') + (bh ? '&bh=' + bh : '') + (ct ? '&ct=' + s_ape(ct) : '') + (hp ? '&hp=' + hp : '') + (s_vb ? '&vb=' + s_vb : '') + (p ? '&p=' + s_ape(p) : '')
            }
            if (s_gg('usePlugins')) s_wd.s_doPlugins();
            var l = s_wd.location,
        r = tfs.document.referrer;
            if (!s_gg("pageURL")) s_wd.s_pageURL = s_fl(l ? l : '', 255);
            if (!s_gg("referrer")) s_wd.s_referrer = s_fl(r ? r : '', 255);
            if (s_lnk || s_eo) {
                var o = s_eo ? s_eo : s_lnk;
                if (!o) return '';
                var p = s_gv('pageName'),
            w = 1,
            t = s_ot(o),
            n = s_oid(o),
            x = o.s_oidt,
            h, l, i, oc;
                if (s_eo && o == s_eo) {
                    while (o && !n && t != 'BODY') {
                        o = o.parentElement ? o.parentElement : o.parentNode;
                        if (!o) return '';
                        t = s_ot(o);
                        n = s_oid(o);
                        x = o.s_oidt
                    }
                    oc = o.onclick ? o.onclick.toString() : '';
                    if (oc.indexOf("s_gs(") >= 0) return ''
                }
                ta = o.target;
                h = o.href ? o.href : '';
                i = h.indexOf('?');
                h = s_gg('linkLeaveQueryString') || i < 0 ? h : h.substring(0, i);
                l = s_gg('linkName') ? s_gg('linkName') : s_ln(h);
                t = s_gg('linkType') ? s_gg('linkType').toLowerCase() : s_lt(h);
                if (t && (h || l)) q += '&pe=lnk_' + (t == 'd' || t == 'e' ? s_ape(t) : 'o') + (h ? '&pev1=' + s_ape(h) : '') + (l ? '&pev2=' + s_ape(l) : '');
                else trk = 0;
                if (s_gg('trackInlineStats')) {
                    if (!p) {
                        p = s_gv('pageURL');
                        w = 0
                    }
                    t = s_ot(o);
                    i = o.sourceIndex;
                    if (s_gg('objectID')) {
                        n = s_gg('objectID');
                        x = 1;
                        i = 1
                    }
                    if (p && n && t) qs = '&pid=' + s_ape(s_fl(p, 255)) + (w ? '&pidt=' + w : '') + '&oid=' + s_ape(s_fl(n, 100)) + (x ? '&oidt=' + x : '') + '&ot=' + s_ape(t) + (i ? '&oi=' + i : '')
                }
            }
            if (!trk && !qs) return '';
            if (trk) q = (vt ? '&t=' + s_ape(vt) : '') + s_hav() + q
            s_wd.s_linkName = s_wd.s_linkType = s_wd.s_objectID = s_lnk = s_eo = '';
            if (!s_wd.s_disableLegacyVars) s_wd.linkName = s_wd.linkType = s_wd.objectID = ''
            var code = '';
            if (un) {
                if (trk && s_vs(un, sed)) code += s_mr_DataBank(un, sess, q + (qs ? qs : s_rq(un)), ta,fileName);
                s_sq(un, trk ? '' : qs)
            } else if (s_wd.s_unl) for (var unn = 0; unn < s_wd.s_unl.length; unn++) {
                un = s_wd.s_unl[unn];
                if (trk && s_vs(un, sed)) code += s_mr_DataBank(un, sess, q + (qs ? qs : s_rq(un)), ta,fileName);
                s_sq(un, trk ? '' : qs)
            }
            return code
        }


        function s_mr_DataBank(un, sess, q, ta,fileName) {
            un = un.toLowerCase();
            //q = q + '&pe=lnk_d&pev1=http%3A//wits.worldbank.org/data/public/CP_ProductData.xls&oid=http%3A//wits.worldbank.org/data/public/CP_ProductData.xls&pid=United%20States%20%7C%20Stages%20Of%20Processing%20%7C%20Import%20%7C%20Product%20Share%20%28%25%29%20%7C%202009%20-%202013%20%7C%20WITS%20%7C%20Data%20download%20excel&pidt=1';
            q = q + '&pe=lnk_d&pev1=' + fileName + '&oid=' + fileName + '&pid=' + document.title + '&pidt=1';
            alert (q)
            var ci = un.indexOf(','),
        fun = ci < 0 ? un : un.substring(0, ci),
        unc = s_rep(fun, '_', '-'),
        imn = 's_i_' + fun,
        ns = s_gg('visitorNamespace'),
        im, b, e, rs = 'http' + (s_ssl ? 's' : '') + '://' + (ns ? ns : (s_ssl ? '102' : unc)) + '.112.2O7.net/b/ss/' + un + '/1/G.9p2/' + sess + '?[AQB]&ndh=1' + (q ? q : '') + (s_q ? s_q : '') + '&[AQE]';
            if (s_ios) {
                im = s_wd[
        imn] ? s_wd[imn] : s_d.images[imn];
                if (!im) im = s_wd[imn] = new Image;
                im.src = rs
                if (rs.indexOf('&pe=') >= 0 && (!ta || ta == '_self' || ta == '_top' || (s_wd.name && ta == s_wd.name))) {
                    b = e = new Date;
                    while (e.getTime() - b.getTime() < 500) e = new Date
                }
                return ''
            }
            return '<im' + 'g sr' + 'c="' + rs + '" width=1 height=1 border=0 alt="">'
        }





        /*  Ominature code Ends  */

