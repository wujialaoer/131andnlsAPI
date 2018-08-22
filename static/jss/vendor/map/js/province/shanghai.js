(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('上海', {"type":"FeatureCollection","features":[{"id":"310101","geometry":{"type":"Polygon","coordinates":["@@AE@GDEVSHMAGOYKKCCcGCDGBALCPIAAPIV@DV@BDCPEPLENFHCJHFB"],"encodeOffsets":[[124411,31993]]},"properties":{"cp":[121.490317,31.222771],"name":"黄浦区","childNum":1}},{"id":"310104","geometry":{"type":"Polygon","coordinates":["@@FOBOJBDOBKHADCOGCEAE@EFOBMAEUW@GBEHILMBE@KKSAMMAE@AFA@@BC@ABC@@BD@@BH@@BB@EHDDCBECADGEEAEBFNET]CMRELQjOEGRFBAHDBAHH@@B@BDA`H@F@BC@AB@FD@DD@@@CH@DDAFDD^LEPF@DFTDLHD@@A"],"encodeOffsets":[[124374,31969]]},"properties":{"cp":[121.43752,31.179973],"name":"徐汇区","childNum":1}},{"id":"310105","geometry":{"type":"Polygon","coordinates":["@@CEE@FO]KCCBECCG@@D@@CCmBSAcKG@EBAEGC@DC@QE@CA@@BEBMTNFAFDBA`D@BDA@AA@FFBBLD@@@IBDBABDB@@DBADB@CHA@@DC@C@@@BBABFDH@AHD@ACDA@FD@BCA@@CJCNWJ@BCHAFEF@XCV@DFH@VFBBCFLEFFFBB@@IDAJFBABIFK"],"encodeOffsets":[[124355,31964]]},"properties":{"cp":[121.4222,31.218123],"name":"长宁区","childNum":1}},{"id":"310106","geometry":{"type":"Polygon","coordinates":["@@DOACU@BGSGQCELAJABIECBBNFHJB\\PNKD@JHFM"],"encodeOffsets":[[124382,31984]]},"properties":{"cp":[121.448224,31.229003],"name":"静安区","childNum":1}},{"id":"310107","geometry":{"type":"Polygon","coordinates":["@@DB@DHBBCDBB@A@DF@@DFDDHGBDDALZIDA@ACQ@@DGBEFBB@FD@J@BFMBCCCDID@AODAEIDBDEBABBB@DC@AF@@AFGACBADBB@@NFADD@@BB@B@BAB@BBDA@HBB@AJ@@AD@@BB@AFHBDCJFHBGQAAJA@ALCBBF@@AB@@BD@@@JABDABD@@BHBBBNACEJA@ADAAA@B@ADAAAJBIQB@FCBBD@AGJ@@EJA@EHADDAB@BFANNDEVIPUAGD@@CA@@ECCBC@AGASKIAEGACA@EAEEA@EFC@DEAAUEG@CEU@WDE@EFGBADI@IP"],"encodeOffsets":[[124267,31987]]},"properties":{"cp":[121.392499,31.241701],"name":"普陀区","childNum":1}},{"id":"310108","geometry":{"type":"Polygon","coordinates":["@@ASG@BOCKCEBA@G@KBEDCLMVQ@EACDECABCDKECGDMEKFIGC@ONDF@FB@@DC@BHOVUJCFIGA@@RCJBNG@ABBDBB@DNBAJJ@@FB@@H@@@DF@ENB@BDD@BAT@BENDFDPB@AF@@G"],"encodeOffsets":[[124384,32068]]},"properties":{"cp":[121.465689,31.25318],"name":"闸北区","childNum":1}},{"id":"310109","geometry":{"type":"Polygon","coordinates":["@@VCNB@UHWVFBABIKK@MJCJGBKV[C@@I[AOEODCACCCLADDBCFBD@FURKNCDAF@L@HABDFDLAPH@BR"],"encodeOffsets":[[124384,32068]]},"properties":{"cp":[121.491832,31.26097],"name":"虹口区","childNum":1}},{"id":"310110","geometry":{"type":"Polygon","coordinates":["@@pSNGDCDGDM@cBGL[BKAGEGMOcY[GWA@JD@U\\ALIHID@NLLAJABUEGX@PVA@ZDDADGFX`ZKDHFA"],"encodeOffsets":[[124443,32100]]},"properties":{"cp":[121.522797,31.270755],"name":"杨浦区","childNum":1}},{"id":"310112","geometry":{"type":"Polygon","coordinates":["@@BAAA@@D@D@@CB@DGA@BCCA@@CABACAJA@@C@AKEA@EBBB@ACC@B_CABEMENSFA@AB@@DRFD@@CHDBFNA`JVDlA@EBAD@@A@E_GCB@A@AG@BGCABGEAHQPFRiFKNQ^DFSEMFAFBHFBCFDDACCFGA@@AG@@AC@@AD@BAD@@AB@BEF@F@B@FBBNDFLCDBCBFB@DFG@CBBABDB@CDBAFCB@DABD@B@DB@BD@@B@BB@B@@FJ@DKLFB@DMDBBABBCFDB@@HB@BBABBDCBGNBDAB@@BPDBAF@@AB@@AB@@CDB@BF@DGB@@CD@FDADF@BADDDCBBDCAAC@BCFEAAB@FECABC@ADBBEB@@EGCABAB@@CAA@CAIABAAA@@ECDGD@BCBBD@BBHBFALABAFBD@@CGA@BC@BCEAA@A@@AEA@@AAA@G@DCG@CCBAAA@ADBDAEAC@ACE@BCC@BG@ACBBAEAAA@B@CECDEAEBAB@BDB@DBD@BBD@FDBGBBFCAABCBDBCEC@UBACA@AAA@ABB@CCCE@AA@ADCD@@BF@@FB@@BDB@CDB@ED@DFB@ABB@HDAADCBE@CCACC@CACIABA@@@BD@@AD@DICABCECFA@AMEO@@CC@ABA@@ABA@GCACBADCDA@@BAAAB@BICADE@@BEAABC@GHC@E@@FD@@BA@CFC@@BC@AASEKG@ACAIZBFGDYCIAKGKAU@OCGAKIMIMCOEeCWOBWHG@CDBZHBPTBHJHABECM@ADBB@J@F@D@B@FBDAD@NBBBN@T@DBBADFCFDDGTDJFAFNB@DB@EFFBADD@@DFDDCDBCJGPAB@DELGAADMCEPHB@AB@@BHF@BABCAABA@AFFB@@CDCAEHB@EHBBCF@BADEJE@ADD@BDGFADA@@FCB@DCDAFA@ABGA@BE@ABHD@@BB@DABABEJAFCHEHABAFCD@BABCFCB@BED@BA@@BABADGFAAA@@CAAKGCAKAUTC@CDDBADIHDFCF@@CDBDCHDBAHGDBDCDABCAAB@BA@@DKACBDDABBF@@@BHBBDDBC@BDFFFBBDD@@AH@HB@EFC@ABC@FFCFBB@LCFBBAEGFEDABGJMJCL@XGNFH@PDBB@DDD"],"encodeOffsets":[[124251,31988]]},"properties":{"cp":[121.375972,31.111658],"name":"闵行区","childNum":1}},{"id":"310113","geometry":{"type":"Polygon","coordinates":["@@@FMAUD@JE@@BOAECMCAFS@ABC@ACA@FME@@C@@@GA@@EI@BIMA@CCA@CBAH@AMDI@OBACEEB@ABACCGB@FIB@FI@BHC@AAEDA@JRIABBCB@B@ABBCB@BIBDFMBAAGA@AC@BAACIB@@C@@AA@@BE@AAKD@BIBBBHRC@ICCCCDGABEA@@AC@@BI@@BAA@GCBAAA@ABBBCDAAEJFDB@P\\J@@FB@@DGA@FD@@DAAADCF@@ABBBCDDB@DF@CLCAEFEB@DG@@HD@DB@BB@@FHD@BADA@CFCFABDB@BED@BCDEFFBABB@ADG@GNCBFHAFA@@DCAIB@DB@@FBBEF^JBAH@AFD@A@@DA@@BFDABD@@JB@@BA@AD@DB@@FCJ@FA@C@ABAAABENDB@BCDCFG@ADDBEDDDABA@ADB@ADF@BD@BEACD@BCBJF@BABA@BBCFE@ABCLABBBAFEB@A@BCDEBADD@CBBBBAADBBD@B@BBADFADDDA@ED@ACB@FF@DFBBCB@@AC@@GF@B@AFD@@DB@@AD@@BD@\\P^GVGcBAEGBE\\Q`W|i\\UdSTQb[QQQY@QJONIVIEGEBCGYLW_HEBCCC@YUB"],"encodeOffsets":[[124402,32064]]},"properties":{"cp":[121.489934,31.398896],"name":"宝山区","childNum":1}},{"id":"310114","geometry":{"type":"Polygon","coordinates":["@@A@A@@AC@BCME@@AABCDAHBBE@@BED@@CAABAFAACJCBFPC@BJCDCDDNAAEI@C@@EAAFEHA@CR@BDB@JCKYCBACGHCCCE@@CEB@A@CAADGA@CCAADGB@DB@ADC@@ECBBDC@BGG@CCIC@EAAOCG@OEUHK@IDGJCLCBEFFHABEAKDA@EAED@EAD@BED@FGAG@@BC@@AC@@DA@@CCBEA@DGAKFOB@CG@@BAA@CGCBAEA@CA@@DEA@FCFB@ABAAABAC@AAACFGEBCABCCABCCABCAB@@CC@ADGDEEC@EDCA@BA@BDA@ACEFECABC@@BB@BDC@AJIJCAADC@CGEB@@AB@BDF@JDD@DHBABD@B@@BCHE@@BC@@DCA@DC@@DDBADA@EDFBIPCFIIBCMAE@AJ@B@FAB@DAJDB@DDB@FD@@BCBBBB@@DABAB@DCBBBAHBB@FMCKB@HF@EHIACBE@BFCBBLAH@DD@@CD@D@BFNBCDGBAFTHBEBB@DB@@AJD@ANFABBBD@ABD@@ANDBDCD@BABA@ABLDCFDBF@ABC@ABDB@BFDADJDDCCDBDCDAAABBB@BC@ABA@ABC@@HA@C@@DJ@@DFB@BD@HB@AD@ABBDFA@HA@@CA@BDABOBMFAFB@ADBDAB\\LDAHBBADBHAPFJFAFBFFD@BJHRD@FHFNHDACCLADBH@DDFABHCB@BHJF@AJ@@FAFDB@AEFE@CBIHB@AC@@AA@DEHD@BD@ADB@@BBBB@AKD@@DBA@@@AD@DBBDBBDBD@@FDDBA@CDAHDBBHDADB@FA@BD@DCD@BFFCJD@DA@FBBDFADC@A@BFABEAABADKBAF@DEAAB@BA@AIEDA@ADCFB@AACE@BCA@BCB@BACCFCCABCH@DEDC@ACAFMBABBBAD@B@@EDI@EA@@CBCB@@AA@@IC@BAEC@AB@@CB@C@BEG@AB]I@@DABCAA@EA@@CJADB@CB@BEEGDAHMH@BCA@BAEAFEDC@AFC@ACABALQGC@ECCE@@GH@@CFAFEDBDKE@@CCADCAABA@@DEBCBB@CC@@EHB@CA@@EI@GMEMICFIBBBABAA@"],"encodeOffsets":[[124249,32046]]},"properties":{"cp":[121.250333,31.383524],"name":"嘉定区","childNum":1}},{"id":"310115","geometry":{"type":"MultiPolygon","coordinates":[["@@bM²WLCļÑNI^_ÈïsJQ¶±`e`Z¡LDCsEWOWs@GBI\\wsYg|QNUBģFqAZHZB@@JHBAJFRA@BB@HABB@@J@HBDBLAJC@@BD@ABA@B@AD@FB@@BA@@BA@G@@FC@AB@DA@ABCAC@@DEA@DD@BDEF@FQJE@CAGJA@ABCAEDBDGHADWR_TYJI@G@SD@AA@@AA@IDGB@A@BQBmAA@CBOAGFELC@AAaDACS@C@@AIAABKA@BEBFDADDBCJC@@BC@@A@@ABJBBD@DDDDB@DAFCDBBGCA@BAA@CEC@@FCA@DCA@AA@@EE@@AC@CD@BBBF@DD@DAA@BBB@BDBAB@VFDADACADBBEDAAAHECC@AAC@CAA@ACA@ABBFCFFD@D@ABBFBABDA@BAHD@ADF@BDD@FBCBCA@BBBABDDH@CDH@B@BB@@FB@BB@B@FBADD@@AHB@DC@EAABKBEBGAAAC@AAADC@CHFD@@BBABJBDBB@DB@@BABAHD@FA@AFCA@BADDBEFA@BBEFADD@BBCDAACDCCABE@BCECC@@DA@CHE@@ACA@DA@@BA@@BE@ABOC@AA@CBMAAHCDAAAB@AGA@@CADEAAABCACNA@KECLC@E@@EA@A@@A@AC@@AAAA@A@C@BA@CDABEAAADCABAAA@DEH@CEADACAKDHN@LAFKNGJAF@D@DBFNLHLANEP@FBFJJJDdHDDLLNVDHAHEJWXAF@FJFHDtDXHhZNPFHBHALK\\AH@dCNCHCDMHoTUJMJEJCF@RRZ","@@PDNAvOFGBKCeEQGEI@IBMNafELAJ@J@H","@@HRHJNBX@XCRGfEFGBM@eYuGIgCIAK@KDMPIREVCXAR"]],"encodeOffsets":[[[124438,32149],[124808,31991],[124870,31965]]]},"properties":{"cp":[121.567706,31.245944],"name":"浦东新区","childNum":3}},{"id":"310116","geometry":{"type":"MultiPolygon","coordinates":[["@@DBBAGCBD","@@HADA@AGCKHB@BB","@@FACAAD","@@DB@EB@@CB@@GEQ@IEKAM@ATE@EHADF@GDCFFPD^BBED@@BD@@DPBB@@CDB@BLC@ADB@BF@@CF@@DB@BDCDA@@DCACBC@AB@HDBRTHGBCHBDB@AF@B@NACQ@@@AC@@CC@CIEE@CFCFHDBHABDN@BED@BDNA@HAF@FCBADDLD@DAAC@AB@@ANC@ANC@TDBL@DGJC^BDBDBJ@^F\\VHGPB@CD@BAF@DKDBBCA@BAC@FK@E@BD@@BNABCF@@AFB@AD@BADB@GA@@AF@BCFBDKB@@BDBB@BEDBBDF@@CFB@HD@@F@@@HA@BBA@BDC@BJADBBLB@AA@@ED@DIHA@BB@BDDBBCBA@@@BF@@CB@ABFBBCFB@BD@FCF@DBBAD@BAD@BABBBAHDJ@ABDDABDBHCBDJIBOFE@IDKJAFCBAJELAAEBCBKAA@GD@AIBEAIDOK@@EDEAABA@A@BB@@@B@B@AAD@@ADA@EJ@@CB@H@BLDBFA@@B@@GEB@EB@@CB@DETAAADA@GH@BHLAPA@ABBD@JU@ABBFCB@£«ugWOCOCgBDaAE`@HCBBFCBAJA@AFDFAFFD@FDFCFBBA@BBAFBDA@CDAAA@STCBWLAAABBBCBAACB@AABBBIFAPCHCFBBCB@HA@CAABGPIBO@ICCEDMGAILADACCBCA@CECEAKCADCBADAAKAEC@HEBCAEDQBACEAAB@BGCYDEJCB@BBFN@B@@JDbHRJL@D@FA@@CCB@DABBDEFACSDA@AAA@DDBLFHAB@BABCAIDADABCEKCABC@CDABBBC@@B@BA@BBcO[@MGDCC@DK_KFMGBCFGADEA@AGCA@@DAD@AFB@BCB@DGOCCLKR]JADEAMMABBCA@CB@BABCAACB@CEAB@CAAGBDFGFHFGBBDFHF@BDB@ABBFDADFF@DHD@DFFADDGDDDADDABDA@DDCDFFBDEBFFDCDBCBDDEBBDB@@@CDCDI@GB@BBFAB]DAHCDDH@DDBHB@DHABDB@@FG@CABJBl@FEFCFBB@LB@J@@GPDA@DD@AD@D@@CCA@BCA@CB@A@@AF@BGFAADDB@A"]],"encodeOffsets":[[[124321,31442],[124337,31429],[124341,31419],[123933,31687]]]},"properties":{"cp":[121.330736,30.724697],"name":"金山区","childNum":4}},{"id":"310117","geometry":{"type":"Polygon","coordinates":["@@@DLB@BFTHAFB@DABHFELFBBAH@DIHB@GB@@CB@BEDAB@LAPB@DFBADD@@BBBN@@DRB@BADALHABlH@@\\ABAFQPOLDBDBDCJBBJFA@FCJC@@DCAABDDBDKHB@CDBDEBCEINHDABFB@DDDD@F@@ABCAA@EB@@CH@B@BCBABD@DLBBCB@R@ADD@BAJ@BBBB@BA@@NG@AFELC@AB@@CBA@KJAAA@CAC@CLD@ABBBGJDBBDCFBBDCFDADBBDCABB@@BA@HHDBABFFDCBBDCB@BABB@AFEBBBED@FEDDBED@BALB@CD@DEHBBGDBBCB@BFB@@LC@@FJA@AJB@@B@@FB@@HH@@BJ@CJDDADDBB@B@BCJD@DB@AB@FC@@FC@@D@FDA@X\\ILF@CAA@ABBJ@DEXFPBI_CM@CF@NFF@BBB@BAADBLFBJABHKB@@L@BHXCAGBAF@@BB@@BCFBDDBD@BB^ENNEFEAEHCC@DBB@BB@AH@BFCD@B@ABDB@@FA@BBAD@BBHBDAB@BAHBADNFHDABB@B@FGFBF@@AHBFC@CDC@CDA@EB@BCFCBCAAA@@AFAFIBC@ADEAAFGA@FGDBDC@@EABEB@BADBBA@AGE@AA@@BGAFONDBCHBFK@CBAHODICACDEC@CC@BCEAFEA@@CMABEIESCCHECEDBCAA@WAMAA@MBCAC@E@A@C@E@IAABCN@FDBAIGAGOSGAA[DAD@J@XIJ@PDDI@ODK@UD@BCAAGADSG@CAA@AABAAAA@@BECBC@IFCBC@CIG@A@AGDCABACCBAA@@@G@GCCB@AABC@ABC@ABCAE@EDC@@AEAADEABAA@@DE@@A@@ABADCAACA@@AGBCJC@@FB@@BMCBCAID@ACB@AAB@@G@@@EC@@GEA@DE@ACCAAFA@CA@AA@CLEAADE@@BB@@HCAABC@@BEA@BE@ADMB@AC@@A@FELD@ABB@ADCACLE@ABC@@DOAGH[U]EI@CACA]AIDCHK@CA@SMD@BMD@BA@@BBDCBC@CKBCDA@EBE@GMBACC@AFM@ACGBCAEGED@DFFDJD@@DD@@B@@DRMBA@E@@BCAGAADGHQSCA@GBAD@DADB@CB@DCACA@@CE@@DE@@ACA@BKD@ACA@DA@OA@CC@@AC@AF]AOCEECD@HCEGB@FSF@BBNFL@JFR@HA@@DA@@FA@@A"],"encodeOffsets":[[123933,31687]]},"properties":{"cp":[121.223543,31.03047],"name":"松江区","childNum":1}},{"id":"310118","geometry":{"type":"Polygon","coordinates":["@@EAEHA@A@BAGCMEBCGAABA@CBGAAAC@AB@AEB@@CABAA@C@ED@ABGA@@AAA@CDDFGFBFEMM]FAAC@CAACDE@AA@@AE@ABBHWDAGK@@@LAAGIBEAAKBCABA@AAE@MEE@@DDNJ`OAWECFI@AA@BBB@DKE[J@WCB@E@CD@@ED@@EBAA@@CICADA@A@CABCCCDII@@AG@@GA@@EA@@@IA@BIB@ED@@KA@AEA@ADCAAHGACFC@@DKAABC@AFCCEFC@AFAAEF@BAAABA@CDAACDEEBACAGGB@@AA@BACDAABCECCDAADGAACAHIAABAC@@EDEB@HBBBLIB@DA@@BAD@FKBEH@@MB@@AAAAAI@ABC@BCQ@A@ADKA@CACABADA@G@@DA@@FBBAD@BE@C@CC@CEABAGCJMDFFAACDCA@LGACCCBADB@CD@DI@EEBAIIACDCACAPKROBEBA@[G@AkGBBKBC@AQA@CM@AA@AC@BCEA@COAKBA@CBAFA@@DA@@HGACJG@ABEAFKGEBA@CEAGBEUKA@CQE@BCABCEBAHE@@BB@A@@DDB@ADB@DC@C@@BCCB@OC@HM@AHC@AHF@CHBF@BC@@DB@ADBB@BNB@BB@@FDB@DC@A@CRA@CFBBAFGAADDB@HA@@DB@@D@@ADBBEJDBM@ADg@ABFFABGBCNGBC@CACBAADAAEFACK[AAAJK@AC@GBEDG@ACOFOEAD@JQ@@FBdCDEL@FCD@H@JHXBPHABDEJ@BEDCACHCFAHA@@EG@QB@BBDE@@DE@AAE@@CG@ABADA@ABCAEFBLD@DHNJDD@HDHHHJFdDPCTD\\JnEMPDvBJHADHBBD@BD@@EHBFCBEDB@AD@HREB@FHD@DHBBGD@H@ABDBL@@AB@@AD@@CF@AFFD@BBB@CB@@FHDADB@@DEAADJB@DCHEAABBB@BFBAFEFADJDABIAADFB@DAB@DDBABCB@BE@@DD@Kz@DD@@HD@BDE@ADA@A@AFFB@HBA@BAB@FC@@AIBDBDABD@NA@BBBBABBRA@@@dFFDDHEBBHDNFFABDBDADCB@@AB@BCFO@ABCHCD@BBC@@@FDPRF@FA@DB@@AHAACFCHA@DFAACD@BBDAAABAD@BBD@@CDALBFB@GCIBA@@FADHD@BCDBJIBID@ACA@@AD@BAFDFEBDB@ACB@@ADBFCD@FFHCBCD@@DA@DBBADDBADDBAADHFDEBB@BBDBABBBAA@DE@EFB@CB@@DFBABHD@DBB@AH@@DPALEHB@CFBDA@DB@@CD@AAEAEEACD@CAACGA@A@@AEBACCDALB@CB@@ABADBBADCACHCBGCADGACDC@@DECEJGBCCADCD@VSLBDBLHBB@DB@BBHEBCBA@AB@@AFC@ADADEBA@ADCBEBAHIDKFIBABA@CIE"],"encodeOffsets":[[124232,31906]]},"properties":{"cp":[121.113021,31.151209],"name":"青浦区","childNum":1}},{"id":"310120","geometry":{"type":"Polygon","coordinates":["@@LBBAJB@BD@T@BDbCBBD@FKHEPBDAB@nBRA@A@BHAJCB@@BB@@BTCH@J@ZI`SXQBCHGACFCDBBAB@HIDBF@NGDA@EFEACC@@CFB@CD@DBBAB@@CBAD@@EH@B@@AB@@AA@@EBCA@B@BAC@@AD@BIAKAC@G@IA@BA@GAAB@EQBIGA@IA@GYBYrĥDEU¡_[g¤A@EDAA@BIVC@AA@BOBKBAGG@@HCBBBSBCFA@@DA@@FFA@HA@@@EBCAAKG@A@@DI@@FCB@BC@BBA@A@@@A@@A@BABBBCF@FL@CPBJAFBJC@@HBBALADBFKBIFABEDIBCL@JEFAPKJHFBFADED@JADFD@AB@BBABBBB@DBH@CTHBBBADC@@VCL@PCJTfD^JNJLJHBPDV@LBLHJBZDHCAEJYDB@BLHTFDBB@@AD@DEB@@AC@@EF@D@HGD@BAFB@AF@BCJD@ABABB@AB@DCBCDADB@HAB@BB@BAD@@DP@@B"],"encodeOffsets":[[124489,31743]]},"properties":{"cp":[121.458472,30.912345],"name":"奉贤区","childNum":1}},{"id":"310230","geometry":{"type":"MultiPolygon","coordinates":[["@@^ITIRCZAVEV@bWXCDAVEBERKD@\\U\\K\\GBCNCBJD@RE`MB@JCTDÔoĒmƂZñLcDgG_SY]O£kcIUABoH_H±jãYHNODQH½pÛ`gBUAQImwf±ŧŚEBoH~zh^rXbLpVbJjHP@LANE s`SjoLGJQKCV_JK","@@ODMFYnMLaXŃÈ{^yv[RYLMLAF@HHHHBOJEL]FKPMDCjIÌknGXI`MdKhWPGJGNMT[DEBQFS@SC_GKECKC","@@UDmXOLQPCF@FDBDBN@`ENEJEXQTSBEACACEA","@@BBB@DBDCCAC@@ACB@B","@@CNO\\@DBBTB^ANCNE\\A\\IjMFIPa@IAOAK_uCAS@GEG@YFGH[PSRQZC^"]],"encodeOffsets":[[[124346,32532],[124702,32062],[124547,32200],[125176,32174],[124726,32110]]]},"properties":{"cp":[121.397516,31.626946],"name":"崇明县","childNum":5}}],"UTF8Encoding":true});
}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2ZW5kb3IvbWFwL2pzL3Byb3ZpbmNlL3NoYW5naGFpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoWydleHBvcnRzJywgJ2VjaGFydHMnXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGV4cG9ydHMubm9kZU5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIENvbW1vbkpTXG4gICAgICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgnZWNoYXJ0cycpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICAgICAgZmFjdG9yeSh7fSwgcm9vdC5lY2hhcnRzKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBlY2hhcnRzKSB7XG4gICAgdmFyIGxvZyA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmVycm9yICYmIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWVjaGFydHMpIHtcbiAgICAgICAgbG9nKCdFQ2hhcnRzIGlzIG5vdCBMb2FkZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWVjaGFydHMucmVnaXN0ZXJNYXApIHtcbiAgICAgICAgbG9nKCdFQ2hhcnRzIE1hcCBpcyBub3QgbG9hZGVkJylcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlY2hhcnRzLnJlZ2lzdGVyTWFwKCfkuIrmtbcnLCB7XCJ0eXBlXCI6XCJGZWF0dXJlQ29sbGVjdGlvblwiLFwiZmVhdHVyZXNcIjpbe1wiaWRcIjpcIjMxMDEwMVwiLFwiZ2VvbWV0cnlcIjp7XCJ0eXBlXCI6XCJQb2x5Z29uXCIsXCJjb29yZGluYXRlc1wiOltcIkBAQUVAR0RFVlNITUFHT1lLS0NDY0dDREdCQUxDUElBQVBJVkBEVkBCRENQRVBMRU5GSENKSEZCXCJdLFwiZW5jb2RlT2Zmc2V0c1wiOltbMTI0NDExLDMxOTkzXV19LFwicHJvcGVydGllc1wiOntcImNwXCI6WzEyMS40OTAzMTcsMzEuMjIyNzcxXSxcIm5hbWVcIjpcIum7hOa1puWMulwiLFwiY2hpbGROdW1cIjoxfX0se1wiaWRcIjpcIjMxMDEwNFwiLFwiZ2VvbWV0cnlcIjp7XCJ0eXBlXCI6XCJQb2x5Z29uXCIsXCJjb29yZGluYXRlc1wiOltcIkBARk9CT0pCRE9CS0hBRENPR0NFQUVARUZPQk1BRVVXQEdCRUhJTE1CRUBLS1NBTU1BRUBBRkFAQEJDQEFCQ0BAQkRAQEJIQEBCQkBFSEREQ0JFQ0FER0VFQUVCRk5FVF1DTVJFTFFqT0VHUkZCQUhEQkFISEBAQkBCREFgSEBGQEJDQEFCQEZEQEREQEBAQ0hARERBRkREXkxFUEZAREZURExIREBAQVwiXSxcImVuY29kZU9mZnNldHNcIjpbWzEyNDM3NCwzMTk2OV1dfSxcInByb3BlcnRpZXNcIjp7XCJjcFwiOlsxMjEuNDM3NTIsMzEuMTc5OTczXSxcIm5hbWVcIjpcIuW+kOaxh+WMulwiLFwiY2hpbGROdW1cIjoxfX0se1wiaWRcIjpcIjMxMDEwNVwiLFwiZ2VvbWV0cnlcIjp7XCJ0eXBlXCI6XCJQb2x5Z29uXCIsXCJjb29yZGluYXRlc1wiOltcIkBAQ0VFQEZPXUtDQ0JFQ0NHQEBEQEBDQ21CU0FjS0dARUJBRUdDQERDQFFFQENBQEBCRUJNVE5GQUZEQkFgREBCREFAQUFARkZCQkxEQEBASUJEQkFCREJAQERCQURCQENIQUBARENAQ0BAQEJCQUJGREhAQUhEQEFDREFARkRAQkNBQEBDSkNOV0pAQkNIQUZFRkBYQ1ZAREZIQFZGQkJDRkxFRkZGQkJAQElEQUpGQkFCSUZLXCJdLFwiZW5jb2RlT2Zmc2V0c1wiOltbMTI0MzU1LDMxOTY0XV19LFwicHJvcGVydGllc1wiOntcImNwXCI6WzEyMS40MjIyLDMxLjIxODEyM10sXCJuYW1lXCI6XCLplb/lroHljLpcIixcImNoaWxkTnVtXCI6MX19LHtcImlkXCI6XCIzMTAxMDZcIixcImdlb21ldHJ5XCI6e1widHlwZVwiOlwiUG9seWdvblwiLFwiY29vcmRpbmF0ZXNcIjpbXCJAQERPQUNVQEJHU0dRQ0VMQUpBQklFQ0JCTkZISkJcXFxcUE5LREBKSEZNXCJdLFwiZW5jb2RlT2Zmc2V0c1wiOltbMTI0MzgyLDMxOTg0XV19LFwicHJvcGVydGllc1wiOntcImNwXCI6WzEyMS40NDgyMjQsMzEuMjI5MDAzXSxcIm5hbWVcIjpcIumdmeWuieWMulwiLFwiY2hpbGROdW1cIjoxfX0se1wiaWRcIjpcIjMxMDEwN1wiLFwiZ2VvbWV0cnlcIjp7XCJ0eXBlXCI6XCJQb2x5Z29uXCIsXCJjb29yZGluYXRlc1wiOltcIkBAREJAREhCQkNEQkJAQUBERkBAREZEREhHQkREQUxaSURBQEFDUUBAREdCRUZCQkBGREBKQEJGTUJDQ0NESURAQU9EQUVJREJERUJBQkJCQERDQEFGQEBBRkdBQ0JBREJCQEBORkFEREBAQkJAQkBCQUJAQkJEQUBIQkJAQUpAQEFEQEBCQkBBRkhCRENKRkhCR1FBQUpBQEFMQ0JCRkBAQUJAQEJEQEBASkFCREFCREBAQkhCQkJOQUNFSkFAQURBQUFAQkBBREFBQUpCSVFCQEZDQkJEQEFHSkBARUpBQEVIQUREQUJAQkZBTk5ERVZJUFVBR0RAQENBQEBFQ0NCQ0BBR0FTS0lBRUdBQ0FARUFFRUFARUZDQERFQUFVRUdAQ0VVQFdERUBFRkdCQURJQElQXCJdLFwiZW5jb2RlT2Zmc2V0c1wiOltbMTI0MjY3LDMxOTg3XV19LFwicHJvcGVydGllc1wiOntcImNwXCI6WzEyMS4zOTI0OTksMzEuMjQxNzAxXSxcIm5hbWVcIjpcIuaZrumZgOWMulwiLFwiY2hpbGROdW1cIjoxfX0se1wiaWRcIjpcIjMxMDEwOFwiLFwiZ2VvbWV0cnlcIjp7XCJ0eXBlXCI6XCJQb2x5Z29uXCIsXCJjb29yZGluYXRlc1wiOltcIkBAQVNHQEJPQ0tDRUJBQEdAS0JFRENMTVZRQEVBQ0RFQ0FCQ0RLRUNHRE1FS0ZJR0NAT05ERkBGQkBARENAQkhPVlVKQ0ZJR0FAQFJDSkJOR0BBQkJEQkJARE5CQUpKQEBGQkBASEBAQERGQEVOQkBCRERAQkFUQEJFTkRGRFBCQEFGQEBHXCJdLFwiZW5jb2RlT2Zmc2V0c1wiOltbMTI0Mzg0LDMyMDY4XV19LFwicHJvcGVydGllc1wiOntcImNwXCI6WzEyMS40NjU2ODksMzEuMjUzMThdLFwibmFtZVwiOlwi6Ze45YyX5Yy6XCIsXCJjaGlsZE51bVwiOjF9fSx7XCJpZFwiOlwiMzEwMTA5XCIsXCJnZW9tZXRyeVwiOntcInR5cGVcIjpcIlBvbHlnb25cIixcImNvb3JkaW5hdGVzXCI6W1wiQEBWQ05CQFVIV1ZGQkFCSUtLQE1KQ0pHQktWW0NAQElbQU9FT0RDQUNDQ0xBRERCQ0ZCREBGVVJLTkNEQUZATEBIQUJERkRMQVBIQEJSXCJdLFwiZW5jb2RlT2Zmc2V0c1wiOltbMTI0Mzg0LDMyMDY4XV19LFwicHJvcGVydGllc1wiOntcImNwXCI6WzEyMS40OTE4MzIsMzEuMjYwOTddLFwibmFtZVwiOlwi6Jm55Y+j5Yy6XCIsXCJjaGlsZE51bVwiOjF9fSx7XCJpZFwiOlwiMzEwMTEwXCIsXCJnZW9tZXRyeVwiOntcInR5cGVcIjpcIlBvbHlnb25cIixcImNvb3JkaW5hdGVzXCI6W1wiQEBwU05HRENER0RNQGNCR0xbQktBR0VHTU9jWVtHV0FASkRAVVxcXFxBTElISURATkxMQUpBQlVFR1hAUFZBQFpEREFER0ZYYFpLREhGQVwiXSxcImVuY29kZU9mZnNldHNcIjpbWzEyNDQ0MywzMjEwMF1dfSxcInByb3BlcnRpZXNcIjp7XCJjcFwiOlsxMjEuNTIyNzk3LDMxLjI3MDc1NV0sXCJuYW1lXCI6XCLmnajmtabljLpcIixcImNoaWxkTnVtXCI6MX19LHtcImlkXCI6XCIzMTAxMTJcIixcImdlb21ldHJ5XCI6e1widHlwZVwiOlwiUG9seWdvblwiLFwiY29vcmRpbmF0ZXNcIjpbXCJAQEJBQUFAQERAREBAQ0JAREdBQEJDQ0FAQENBQkFDQUpBQEBDQEFLRUFARUJCQkBBQ0NAQl9DQUJFTUVOU0ZBQEFCQEBEUkZEQEBDSERCRk5BYEpWRGxBQEVCQURAQEFARV9HQ0JAQUBBR0BCR0NBQkdFQUhRUEZSaUZLTlFeREZTRU1GQUZCSEZCQ0ZEREFDQ0ZHQUBAQUdAQEFDQEBBREBCQURAQEFCQEJFRkBGQEJARkJCTkRGTENEQkNCRkJAREZHQENCQkFCREJAQ0RCQUZDQkBEQUJEQEJAREJAQkRAQEJAQkJAQkBARkpAREtMRkJARE1EQkJBQkJDRkRCQEBIQkBCQkFCQkRDQkdOQkRBQkBAQlBEQkFGQEBBQkBAQUJAQENEQkBCRkBER0JAQENEQEZEQURGQEJBREREQ0JCRENBQUNAQkNGRUFBQkBGRUNBQkNAQURCQkVCQEBFR0NBQkFCQEBDQUFAQ0FJQUJBQUFAQEVDREdEQEJDQkJEQEJCSEJGQUxBQkFGQkRAQENHQUBCQ0BCQ0VBQUBBQEBBRUFAQEFBQUBHQERDR0BDQ0JBQUFAQURCREFFQUNAQUNFQEJDQ0BCR0BBQ0JCQUVBQUFAQkBDRUNERUFFQkFCQEJEQkBEQkRAQkJEQEZEQkdCQkZDQUFCQ0JEQkNFQ0BVQkFDQUBBQUFAQUJCQENDQ0VAQUFAQURDREBAQkZAQEZCQEBCREJAQ0RCQEVEQERGQkBBQkJASERBQURDQkVAQ0NBQ0NAQ0FDSUFCQUBAQEJEQEBBREBESUNBQkNFQ0ZBQEFNRU9AQENDQEFCQUBAQUJBQEdDQUNCQURDREFAQEJBQUFCQEJJQ0FERUBAQkVBQUJDQEdIQ0BFQEBGREBAQkFAQ0ZDQEBCQ0BBQVNFS0dAQUNBSVpCRkdEWUNJQUtHS0FVQE9DR0FLSU1JTUNPRWVDwpFXT0JXSEdAQ0RCWkhCUFRCSEpIQUJFQ01AQURCQkBKQEZAREBCQEZCREFEQE5CQkJOQFRAREJCQURGQ0ZEREdUREpGQUZOQkBEQkBFRkZCQUREQEBERkREQ0RCQ0pHUEFCQERFTEdBQURNQ0VQSEJAQUJAQEJIRkBCQUJDQUFCQUBBRkZCQEBDRENBRUhCQEVIQkJDRkBCQURFSkVAQUREQEJER0ZBREFAQEZDQkBEQ0RBRkFAQUJHQUBCRUBBQkhEQEBCQkBEQUJBQkVKQUZDSEVIQUJBRkNEQEJBQkNGQ0JAQkVEQEJBQEBCQUJBREdGQUFBQEBDQUFLR0NBS0FVVENAQ0REQkFESUhERkNGQEBDREJEQ0hEQkFIR0RCRENEQUJDQUFCQEJBQEBES0FDQkREQUJCRkBAQEJIQkJEREJDQEJERkZGQkJEREBAQUhASEJARUZDQEFCQ0BGRkNGQkJATENGQkJBRUdGRURBQkdKTUpDTEBYR05GSEBQREJCQERERFwiXSxcImVuY29kZU9mZnNldHNcIjpbWzEyNDI1MSwzMTk4OF1dfSxcInByb3BlcnRpZXNcIjp7XCJjcFwiOlsxMjEuMzc1OTcyLDMxLjExMTY1OF0sXCJuYW1lXCI6XCLpl7XooYzljLpcIixcImNoaWxkTnVtXCI6MX19LHtcImlkXCI6XCIzMTAxMTNcIixcImdlb21ldHJ5XCI6e1widHlwZVwiOlwiUG9seWdvblwiLFwiY29vcmRpbmF0ZXNcIjpbXCJAQEBGTUFVREBKRUBAQk9BRUNNQ0FGU0BBQkNAQUNBQEZNRUBAQ0BAQEdBQEBFSUBCSU1BQENDQUBDQkFIQEFNRElAT0JBQ0VFQkBBQkFDQ0dCQEZJQkBGSUBCSENAQUFFREFASlJJQUJCQ0JAQkBBQkJDQkBCSUJERk1CQUFHQUBBQ0BCQUFDSUJAQENAQEFBQEBCRUBBQUtEQEJJQkJCSFJDQElDQ0NDREdBQkVBQEBBQ0BAQklAQEJBQUBHQ0JBQUFAQUJCQkNEQUFFSkZEQkBQXFxcXEpAQEZCQEBER0FARkRAQERBQUFEQ0ZAQEFCQkJDRERCQERGQENMQ0FFRkVCQERHQEBIREBEQkBCQkBARkhEQEJBREFAQ0ZDRkFCREJAQkVEQEJDREVGRkJBQkJAQURHQEdOQ0JGSEFGQUBARENBSUJAREJAQEZCQkVGXkpCQUhAQUZEQEFAQERBQEBCRkRBQkRAQEpCQEBCQUBBREBEQkBARkNKQEZBQENAQUJBQUFCRU5EQkBCQ0RDRkdAQUREQkVERERBQkFAQURCQEFERkBCREBCRUFDREBCQ0JKRkBCQUJBQEJCQ0ZFQEFCQ0xBQkJCQUZFQkBBQEJDREVCQUREQENCQkJCQUFEQkJEQEJAQkJBREZBREREQUBFREBBQ0JARkZAREZCQkNCQEBBQ0BAR0ZAQkBBRkRAQERCQEBBREBAQkRAXFxcXFBeR1ZHwoxjQkFFR0JFXFxcXFFgV3xpXFxcXFVkU1RRYltRUVFZQFFKT05JVklFR0VCQ0dZTFdfSEVCQ0NDQFlVQlwiXSxcImVuY29kZU9mZnNldHNcIjpbWzEyNDQwMiwzMjA2NF1dfSxcInByb3BlcnRpZXNcIjp7XCJjcFwiOlsxMjEuNDg5OTM0LDMxLjM5ODg5Nl0sXCJuYW1lXCI6XCLlrp3lsbHljLpcIixcImNoaWxkTnVtXCI6MX19LHtcImlkXCI6XCIzMTAxMTRcIixcImdlb21ldHJ5XCI6e1widHlwZVwiOlwiUG9seWdvblwiLFwiY29vcmRpbmF0ZXNcIjpbXCJAQEFAQUBAQUNAQkNNRUBAQUFCQ0RBSEJCRUBAQkVEQEBDQUFCQUZBQUNKQ0JGUENAQkpDRENERE5BQUVJQENAQEVBQUZFSEFAQ1JAQkRCQEpDS1lDQkFDR0hDQ0NFQEBDRUJAQUBDQUFER0FAQ0NBQURHQkBEQkBBRENAQEVDQkJEQ0BCR0dAQ0NJQ0BFQUFPQ0dAT0VVSEtASURHSkNMQ0JFRkZIQUJFQUtEQUBFQUVEQEVBREBCRURARkdBR0BAQkNAQEFDQEBEQUBAQ0NCRUFAREdBS0ZPQkBDR0BAQkFBQENHQ0JBRUFAQ0FAQERFQUBGQ0ZCQEFCQUFBQkFDQEFBQUNGR0VCQ0FCQ0NBQkNDQUJDQUJAQENDQEFER0RFRUNARURDQUBCQUBCREFAQUNFRkVDQUJDQEBCQkBCRENAQUpJSkNBQURDQENHRUJAQEFCQEJERkBKRERAREhCQUJEQEJAQEJDSEVAQEJDQEBEQ0FARENAQEREQkFEQUBFREZCSVBDRklJQkNNQUVAQUpAQkBGQUJAREFKREJARERCQEZEQEBCQ0JCQkJAQERBQkFCQERDQkJCQUhCQkBGTUNLQkBIRkBFSElBQ0JFQEJGQ0JCTEFIQEREQEBDREBEQEJGTkJDREdCQUZUSEJFQkJAREJAQEFKREBBTkZBQkJCREBBQkRAQEFOREJEQ0RAQkFCQUBBQkxEQ0ZEQkZAQUJDQEFCREJAQkZEQURKRERDQ0RCRENEQUFBQkJCQEJDQEFCQUBBQkNAQEhBQENAQERKQEBERkJAQkRASEJAQURAQUJCREZBQEhBQEBDQUBCREFCT0JNRkFGQkBBREJEQUJcXFxcTERBSEJCQURCSEFQRkpGQUZCRkZEQEJKSFJEQEZIRk5IREFDQ0xBREJIQERERkFCSENCQEJISkZAQUpAQEZBRkRCQEFFRkVAQ0JJSEJAQUNAQEFBQERFSERAQkRAQURCQEBCQkJCQEFLREBAREJBQEBAQURAREJCREJCREJEQEBGRERCQUBDREFIREJCSERBREJARkFAQkRARENEQEJGRkNKREBEQUBGQkJERkFEQ0BBQEJGQUJFQUFCQURLQkFGQERFQUFCQEJBQEFJRURBQEFEQ0ZCQEFBQ0VAQkNBQEJDQkBCQUNDRkNDQUJDSEBERURDQEFDQUZNQkFCQkJBREBCQEBFRElARUFAQENCQ0JAQEFBQEBJQ0BCQUVDQEFCQEBDQkBDQEJFR0BBQl1JQEBEQUJDQUFARUFAQENKQURCQENCQEJFRUdEQUhNSEBCQ0FAQkFFQUZFRENAQUZDQEFDQUJBTFFHQ0BFQ0NFQEBHSEBAQ0ZBRkVEQkRLRUBAQ0NBRENBQUJBQEBERUJDQkJAQ0NAQEVIQkBDQUBARUlAR01FTUlDRklCQkJBQkFBQFwiXSxcImVuY29kZU9mZnNldHNcIjpbWzEyNDI0OSwzMjA0Nl1dfSxcInByb3BlcnRpZXNcIjp7XCJjcFwiOlsxMjEuMjUwMzMzLDMxLjM4MzUyNF0sXCJuYW1lXCI6XCLlmInlrprljLpcIixcImNoaWxkTnVtXCI6MX19LHtcImlkXCI6XCIzMTAxMTVcIixcImdlb21ldHJ5XCI6e1widHlwZVwiOlwiTXVsdGlQb2x5Z29uXCIsXCJjb29yZGluYXRlc1wiOltbXCJAQGJNwrJXTEPEvMORTkleX8OIw6/CmMKTwoBzSlHCtsKxYGVgf1rCoUzCg0TCh0NzRVdPV39zQEdCSVxcXFx3c1lnfFFOVULEo0ZxwoRBWkhaQkBASkhCQUpGUkFAQkJASEFCQkBASkBIQkRCTEFKQ0BAQkRAQUJBQEJAQURARkJAQEJBQEBCQUBHQEBGQ0BBQkBEQUBBQkNBQ0BAREVBQEREQEJERUZARlFKRUBDQUdKQUBBQkNBRURCREdIQURXUl9UWUpJQEdAU0RAQUFAQEFBQElER0JAQUBCUUJtQUFAQ0JPQUdGRUxDQEFBYURBQ1NAQ0BAQUlBQUJLQUBCRUJGREFEREJDSkNAQEJDQEBBQEBBQkpCQkRAREREREJAREFGQ0RCQkdDQUBCQUFAQ0VDQEBGQ0FARENBQEFBQEBFRUBAQUNAQ0RAQkJCRkBEREBEQUFAQkJCQEJEQkFCQFZGREFEQUNBREJCRURBQUFIRUNDQEFBQ0BDQUFAQUNBQEFCQkZDRkZEQERAQUJCRkJBQkRBQEJBSERAQURGQEJEREBGQkNCQ0FAQkJCQUJEREhAQ0RIQEJAQkJAQEZCQEJCQEJARkJBRERAQEFIQkBEQ0BFQUFCS0JFQkdBQUFDQEFBQURDQENIRkRAQEJCQUJKQkRCQkBEQkBAQkFCQUhEQEZBQEFGQ0FAQkFEREJFRkFAQkJFRkFEREBCQkNEQUFDRENDQUJFQEJDRUNDQEBEQUBDSEVAQEFDQUBEQUBAQkFAQEJFQEFCT0NAQUFAQ0JNQUFIQ0RBQUFCQEFHQUBAQ0FERUFBQUJDQUNOQUBLRUNMQ0BFQEBFQUBBQEBBQEFDQEBBQUFBQEFAQ0BCQUBDREFCRUFBQURDQUJBQUFAREVIQENFQURBQ0FLREhOQExBRktOR0pBRkBEQERCRk5MSExBTkVQQEZCRkpKSkRkSERETExOVkRIQUhFSldYQUZARkpGSER0RFhIaFpOUEZIQkhBTEtcXFxcQUhAZENOQ0hDRE1Ib1RVSk1KRUpDRkBSUlpcIixcIkBAUEROQXZPRkdCS0NlRVFHRUlASUJNTmFmRUxBSkBKQEhcIixcIkBASFJISk5CWEBYQ1JHZkVGR0JNQGVZdUdJZ0NJQUtAS0RNUElSRVZDWEFSXCJdXSxcImVuY29kZU9mZnNldHNcIjpbW1sxMjQ0MzgsMzIxNDldLFsxMjQ4MDgsMzE5OTFdLFsxMjQ4NzAsMzE5NjVdXV19LFwicHJvcGVydGllc1wiOntcImNwXCI6WzEyMS41Njc3MDYsMzEuMjQ1OTQ0XSxcIm5hbWVcIjpcIua1puS4nOaWsOWMulwiLFwiY2hpbGROdW1cIjozfX0se1wiaWRcIjpcIjMxMDExNlwiLFwiZ2VvbWV0cnlcIjp7XCJ0eXBlXCI6XCJNdWx0aVBvbHlnb25cIixcImNvb3JkaW5hdGVzXCI6W1tcIkBAREJCQUdDQkRcIixcIkBASEFEQUBBR0NLSEJAQkJcIixcIkBARkFDQUFEXCIsXCJAQERCQEVCQEBDQkBAR0VRQElFS0FNQEFURUBFSEFERkBHRENGRlBEXkJCRURAQEJEQEBEUEJCQEBDREJAQkxDQEFEQkBCRkBAQ0ZAQERCQEJEQ0RBQEBEQ0FDQkNAQUJASERCUlRIR0JDSEJEQkBBRkBCQE5BQ1FAQEBBQ0BAQ0NAQ0lFRUBDRkNGSERCSEFCRE5AQkVEQEJETkFASEFGQEZDQkFERExEQERBQUNAQUJAQEFOQ0BBTkNAVERCTEBER0pDXkJEQkRCSkBeRlxcXFxWSEdQQkBDREBCQUZAREtEQkJDQUBCQUNARktARUBCREBAQk5BQkNGQEBBRkJAQURAQkFEQkBHQUBAQUZAQkNGQkRLQkBAQkRCQkBCRURCQkRGQEBDRkJASERAQEZAQEBIQUBCQkFAQkRDQEJKQURCQkxCQEFBQEBFREBESUhBQEJCQEJEREJCQ0JBQEBAQkZAQENCQEFCRkJCQ0ZCQEJEQEZDRkBEQkJBREBCQURAQkFCQkJBSERKQEFCRERBQkRCSENCREpJQk9GRUBJREtKQUZDQkFKRUxBQUVCQ0JLQUFAR0RAQUlCRUFJRE9LQEBFREVBQUJBQEFAQkJAQEBCQEJAQUFEQEBBREFARUpAQENCQEhAQkxEQkZBQEBCQEBHRUJARUJAQENCQERFVEFBQURBQEdIQEJITEFQQUBBQkJEQEpVQEFCQkZDQkDCgsKjwqt1Z1fCm8KPT0NPQ2dCwodEYUFFYEBIQ0JCRkNCQUpBQEFGREZBRkZEQEZERkNGQkJBQEJCQUZCREFAQ0RBQUFAU1RDQldMQUFBQkJCQ0JBQUNCQEFBQkJCSUZBUENIQ0ZCQkNCQEhBQENBQUJHUElCT0BJQ0NFRE1HQUlMQURBQ0NCQ0FAQ0VDRUFLQ0FEQ0JBREFBS0FFQ0BIRUJDQUVEUUJBQ0VBQUJAQkdDWURFSkNCQEJCRk5AQkBASkRiSFJKTEBEQEZBQEBDQ0JAREFCQkRFRkFDU0RBQEFBQUBEREJMRkhBQkBCQUJDQUlEQURBQkNFS0NBQkNAQ0RBQkJCQ0BAQkBCQUBCQmNPW0BNR0RDQ0BES19LRk1HQkNGR0FERUFAQUdDQUBAREFEQEFGQkBCQ0JAREdPQ0NMS1JdSkFERUFNTUFCQkNBQENCQEJBQkNBQUNCQENFQUJAQ0FBR0JERkdGSEZHQkJERkhGQEJEQkBBQkJGREFERkZAREhEQERGRkFEREdERERBRERBQkRBQEREQ0RGRkJERUJGRkRDREJDQkRERUJCREJAQEBDRENESUBHQkBCQkZBQl1EQUhDRERIQEREQkhCQERIQUJEQkBARkdAQ0FCSkJsQEZFRkNGQkJATEJASkBAR1BEQUBEREBBREBEQEBDQ0FAQkNBQENCQEFAQEFGQEJHRkFBRERCQEFcIl1dLFwiZW5jb2RlT2Zmc2V0c1wiOltbWzEyNDMyMSwzMTQ0Ml0sWzEyNDMzNywzMTQyOV0sWzEyNDM0MSwzMTQxOV0sWzEyMzkzMywzMTY4N11dXX0sXCJwcm9wZXJ0aWVzXCI6e1wiY3BcIjpbMTIxLjMzMDczNiwzMC43MjQ2OTddLFwibmFtZVwiOlwi6YeR5bGx5Yy6XCIsXCJjaGlsZE51bVwiOjR9fSx7XCJpZFwiOlwiMzEwMTE3XCIsXCJnZW9tZXRyeVwiOntcInR5cGVcIjpcIlBvbHlnb25cIixcImNvb3JkaW5hdGVzXCI6W1wiQEBARExCQEJGVEhBRkJAREFCSEZFTEZCQkFIQERJSEJAR0JAQENCQEJFREFCQExBUEJAREZCQUREQEBCQkJOQEBEUkJAQkFEQUxIQUJsSEBAXFxcXEFCQUZRUE9MREJEQkRDSkJCSkZBQEZDSkNAQERDQUFCRERCREtIQkBDREJERUJDRUlOSERBQkZCQERERERARkBAQUJDQUFARUJAQENIQEJAQkNCQUJEQERMQkJDQkBSQEFEREBCQUpAQkJCQkBCQUBATkdAQUZFTENAQUJAQENCQUBLSkFBQUBDQUNAQ0xEQEFCQkJHSkRCQkRDRkJCRENGREFEQkJEQ0FCQkBAQkFASEhEQkFCRkZEQ0JCRENCQEJBQkJAQUZFQkJCRURARkVEREJFREBCQUxCQENEQERFSEJCR0RCQkNCQEJGQkBATENAQEZKQUBBSkJAQEJAQEZCQEBISEBAQkpAQ0pEREFEREJCQEJAQkNKREBEQkBBQkBGQ0BARkNAQERARkRBQFhcXFxcSUxGQENBQUBBQkJKQERFWEZQQklfQ01AQ0ZATkZGQEJCQkBCQUFEQkxGQkpBQkhLQkBATEBCSFhDQUdCQUZAQEJCQEBCQ0ZCRERCREBCQl5FTk5FRkVBRUhDQ0BEQkJAQkJAQUhAQkZDREBCQEFCREJAQEZBQEJCQURAQkJIQkRBQkBCQUhCQURORkhEQUJCQEJARkdGQkZAQEFIQkZDQENEQ0BDREFARUJAQkNGQ0JDQUFBQEBBRkFGSUJDQEFERUFBRkdBQEZHREJEQ0BARUFCRUJAQkFEQkJBQEFHRUBBQUBAQkdBRk9OREJDSEJGS0BDQkFIT0RJQ0FDREVDQENDQEJDRUFGRUFAQENNQUJFSUVTQ0NIRUNFREJDQUFAV0FNQUFATUJDQUNARUBBQENARUBJQUFCQ05ARkRCQUlHQUdPU0dBQVtEQURASkBYSUpAUERESUBPREtAVURAQkNBQUdBRFNHQENBQUBBQUJBQUFBQEBCRUNCQ0BJRkNCQ0BDSUdAQUBBR0RDQUJBQ0NCQUFAQEBHQEdDQ0JAQUFCQ0BBQkNAQUJDQUVARURDQEBBRUFBREVBQkFBQEBERUBAQUBAQUJBRENBQUNBQEBBR0JDSkNAQEZCQEBCTUNCQ0FJREBBQ0JAQUFCQEBHQEBARUNAQEdFQUBERUBBQ0NBQUZBQENBQEFBQENMRUFBREVAQEJCQEBIQ0FBQkNAQEJFQUBCRUBBRE1CQEFDQEBBQEZFTERAQUJCQEFEQ0FDTEVAQUJDQEBET0FHSFtVXUVJQENBQ0FdQUlEQ0hLQENBQFNNREBCTURAQkFAQEJCRENCQ0BDS0JDREFARUJFQEdNQkFDQ0BBRk1AQUNHQkNBRUdFREBERkZESkRAQEREQEBCQEBEUk1CQUBFQEBCQ0FHQUFER0hRU0NBQEdCQURAREFEQkBDQkBEQ0FDQUBAQ0VAQERFQEBBQ0FAQktEQEFDQUBEQUBPQUBDQ0BAQUNAQUZdQU9DRUVDREBIQ0VHQkBGU0ZAQkJORkxASkZSQEhBQEBEQUBARkFAQEFcIl0sXCJlbmNvZGVPZmZzZXRzXCI6W1sxMjM5MzMsMzE2ODddXX0sXCJwcm9wZXJ0aWVzXCI6e1wiY3BcIjpbMTIxLjIyMzU0MywzMS4wMzA0N10sXCJuYW1lXCI6XCLmnb7msZ/ljLpcIixcImNoaWxkTnVtXCI6MX19LHtcImlkXCI6XCIzMTAxMThcIixcImdlb21ldHJ5XCI6e1widHlwZVwiOlwiUG9seWdvblwiLFwiY29vcmRpbmF0ZXNcIjpbXCJAQEVBRUhBQEFAQkFHQ01FQkNHQUFCQUBDQkdBQUFDQEFCQEFFQkBAQ0FCQUFAQ0BFREBBQkdBQEBBQUFAQ0RERkdGQkZFTU1dRkFBQ0BDQUFDREVAQUFAQEFFQEFCQkhXREFHS0BAQExBQUdJQkVBQUtCQ0FCQUBBQUVATUVFQEBERE5KYE9BV0VDRklAQUFAQkJCQERLRVtKQFdDQkBFQENEQEBFREBARUJBQUBAQ0lDQURBQEFAQ0FCQ0NDRElJQEBBR0BAR0FAQEVBQEBASUFAQklCQEVEQEBLQUBBRUFAQURDQUFIR0FDRkNAQERLQUFCQ0BBRkNDRUZDQEFGQUFFRkBCQUFBQkFAQ0RBQUNERUVCQUNBR0dCQEBBQUBCQUNEQUFCQ0VDQ0RBQURHQUFDQUhJQUFCQUNAQEVERUJASEJCQkxJQkBEQUBAQkFEQEZLQkVIQEBNQkBAQUFBQUFJQEFCQ0BCQ1FAQUBBREtBQENBQ0FCQURBQEdAQERBQEBGQkJBREBCRUBDQENDQENFQUJBR0NKTURGRkFBQ0RDQUBMR0FDQ0NCQURCQENEQERJQEVFQkFJSUFDRENBQ0FQS1JPQkVCQUBbR0BBa0dCQktCQ0BBUUFAQ01AQUFAQUNAQkNFQUBDT0FLQkFAQ0JBRkFAQERBQEBIR0FDSkdAQUJFQUZLR0VCQUBDRUFHQkVVS0FAQ1FFQEJDQUJDRUJBSEVAQEJCQEFAQEREQkBBREJARENAQ0BAQkNDQkBPQ0BITUBBSENAQUhGQENIQkZAQkNAQERCQEFEQkJAQk5CQEJCQEBGREJARENAQUBDUkFAQ0ZCQkFGR0FBRERCQEhBQEBEQkBAREBAQURCQkVKREJNQEFEZ0BBQkZGQUJHQkNOR0JDQENBQ0JBQURBQUVGQUNLW0FBQUpLQEFDQEdCRURHQEFDT0ZPRUFEQEpRQEBGQmRDREVMQEZDREBIQEpIWEJQSEFCREVKQEJFRENBQ0hDRkFIQUBARUdAUUJAQkJERUBAREVAQUFFQEBDR0BBQkFEQUBBQkNBRUZCTERAREhOSkREQEhESEhISkZkRFBDVERcXFxcSm5FwoBNUER2QkpIQURIQkJEQEJEQEBFSEJGQ0JFREJAQURASFJFQkBGSERAREhCQkdEQEhAQUJEQkxAQEFCQEBBREBAQ0ZAQUZGREBCQkJAQ0JAQEZIREFEQkBAREVBQURKQkBEQ0hFQUFCQkJAQkZCQUZFRkFESkRBQklBQURGQkBEQUJARERCQUJDQkBCRUBARERAS3pARERAQEhEQEJERUBBREFAQUBBRkZCQEhCQUBCQUJARkNAQEFJQkRCREFCREBOQUBCQkJCQUJCUkFAQEBkRkZEREhFQkJIRE5GRkFCREJEQURDQkBAQUJAQkNGT0BBQkNIQ0RAQkJDQEBARkRQUkZARkFAREJAQEFIQUFDRkNIQUBERkFBQ0RAQkJEQUFBQkFEQEJCREBAQ0RBTEJGQkBHQ0lCQUBARkFESERAQkNEQkpJQklEQEFDQUBAQURAQkFGREZFQkRCQEFDQkBAQURCRkNEQEZGSENCQ0RAQERBQERCQkFEREJBRERCQUFESEZERUJCQEJCREJBQkJCQUFAREVARUZCQENCQEBERkJBQkhEQERCQkBBSEBARFBBTEVIQkBDRkJEQUBEQkBAQ0RAQUFFQUVFQUNEQENBQUNHQUBBQEBBRUJBQ0NEQUxCQENCQEBBQkFEQkJBRENBQ0hDQkdDQURHQUNEQ0BAREVDRUpHQkNDQURDREBWU0xCREJMSEJCQERCQEJCSEVCQ0JBQEFCQEBBRkNAQURBREVCQUBBRENCRUJBSElES0ZJQkFCQUBDSUVcIl0sXCJlbmNvZGVPZmZzZXRzXCI6W1sxMjQyMzIsMzE5MDZdXX0sXCJwcm9wZXJ0aWVzXCI6e1wiY3BcIjpbMTIxLjExMzAyMSwzMS4xNTEyMDldLFwibmFtZVwiOlwi6Z2S5rWm5Yy6XCIsXCJjaGlsZE51bVwiOjF9fSx7XCJpZFwiOlwiMzEwMTIwXCIsXCJnZW9tZXRyeVwiOntcInR5cGVcIjpcIlBvbHlnb25cIixcImNvb3JkaW5hdGVzXCI6W1wiQEBMQkJBSkJAQkRAVEBCRGJDQkJEQEZLSEVQQkRBQkBuQlJBQEFAQkhBSkNCQEBCQkBAQlRDSEBKQFpJYFNYUUJDSEdBQ0ZDREJCQUJASElEQkZATkdEQUBFRkVBQ0NAQENGQkBDREBEQkJBQkBAQ0JBREBARUhAQkBAQUJAQEFBQEBFQkNBQEJAQkFDQEBBREBCSUFLQUNAR0BJQUBCQUBHQUFCQEVRQklHQUBJQUBHWUJZcsKDxKVEwoNFwp9VwqFfwolbwo1nwoHCpEFARURBQUBCSVZDQEFBQEJPQktCQUdHQEBIQ0JCQlNCQ0ZBQEBEQUBARkZBQEhBQEBARUJDQUFLR0BBQEBESUBARkNCQEJDQEJCQUBBQEBAQUBAQUBCQUJCQkNGQEZMQENQQkpBRkJKQ0BASEJCQUxBREJGS0JJRkFCRURJQkNMQEpFRkFQS0pIRkJGQURFREBKQURGREBBQkBCQkFCQkJCQERCSEBDVEhCQkJBRENAQFZDTEBQQ0rCglRmRF5KTkpMSkhCUERWQExCTEhKQlpESENBRUpZREJAQkxIVEZEQkJAQEFEQERFQkBAQUNAQEVGQERASEdEQEJBRkJAQUZAQkNKREBBQkFCQkBBQkBEQ0JDREFEQkBIQUJAQkJAQkFEQEBEUEBAQlwiXSxcImVuY29kZU9mZnNldHNcIjpbWzEyNDQ4OSwzMTc0M11dfSxcInByb3BlcnRpZXNcIjp7XCJjcFwiOlsxMjEuNDU4NDcyLDMwLjkxMjM0NV0sXCJuYW1lXCI6XCLlpYnotKTljLpcIixcImNoaWxkTnVtXCI6MX19LHtcImlkXCI6XCIzMTAyMzBcIixcImdlb21ldHJ5XCI6e1widHlwZVwiOlwiTXVsdGlQb2x5Z29uXCIsXCJjb29yZGluYXRlc1wiOltbXCJAQF5JVElSQ1pBVkVWQGJXWENEQVZFQkVSS0RAXFxcXFVcXFxcS1xcXFxHQkNOQ0JKREBSRWBNQkBKQ1REw5RvxJJtxoLCh1rDsUxjRGdHX1NZXU/Co2tjSVVBwoFCb0hfSMKxasOjwoJZSMKbTk9EUUjCvXDDm8KawotgZ0JVQVFJbcKBd2bCscKcxafFmkVCb0h+esKCwoRoXnJYYkxwVmJKakhQQExBTkXCoHNgU2pvTEdKUUtDVl9KS1wiLFwiQEBPRE1GWW5NTGFYxYPDiHteeXZbUllMTUxBRkBISEhIQsKcT0pFTF1GS1BNRENqScOMa25HWElgTWRLaFdQR0pHTk1UW0RFQlFGU0BTQ19HS0VDS0NcIixcIkBAVURtWE9MUVBDRkBGREJEQk5AYEVORUpFWFFUU0JFQUNBQ0VBXCIsXCJAQEJCQkBEQkRDQ0FDQEBBQ0JAQlwiLFwiQEBDTk9cXFxcQERCQlRCXkFOQ05FXFxcXEFcXFxcSWpNRklQYUBJQU9BS191Q0FTQEdFR0BZRkdIW1BTUlFaQ15cIl1dLFwiZW5jb2RlT2Zmc2V0c1wiOltbWzEyNDM0NiwzMjUzMl0sWzEyNDcwMiwzMjA2Ml0sWzEyNDU0NywzMjIwMF0sWzEyNTE3NiwzMjE3NF0sWzEyNDcyNiwzMjExMF1dXX0sXCJwcm9wZXJ0aWVzXCI6e1wiY3BcIjpbMTIxLjM5NzUxNiwzMS42MjY5NDZdLFwibmFtZVwiOlwi5bSH5piO5Y6/XCIsXCJjaGlsZE51bVwiOjV9fV0sXCJVVEY4RW5jb2RpbmdcIjp0cnVlfSk7XG59KSk7Il0sImZpbGUiOiJ2ZW5kb3IvbWFwL2pzL3Byb3ZpbmNlL3NoYW5naGFpLmpzIn0=