// Direction C — Map + numbered story
// Stylized NoCo map (Greeley + Loveland) with 3 numbered pins,
// then compact pick callouts beneath. Navy background, cream "paper" map area.

const C_NAVY = '#333E48';
const C_NAVY_DEEP = '#2a333c';
const C_YELLOW = '#E0B03C';
const C_CREAM = '#F5F2ED';
const C_INK = '#1f262d';
const C_MUTE = '#6b6358';
const C_RULE = '#cdc6bc';

// Stylized NoCo map. Greeley is east, Loveland is west.
// Two Greeley pins stacked vertically (slightly offset), Loveland pin on the left.
function NoCoMap() {
  return (
    <svg viewBox="0 0 1080 460" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="topo" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.6" fill={C_NAVY} opacity="0.08" />
        </pattern>
      </defs>

      {/* paper bg with topo dots */}
      <rect x="0" y="0" width="1080" height="460" fill={C_CREAM}/>
      <rect x="0" y="0" width="1080" height="460" fill="url(#topo)"/>

      {/* Soft contour lines (Front Range hint, west side) */}
      <g fill="none" stroke={C_NAVY} strokeOpacity="0.1" strokeWidth="1.5">
        <path d="M -20 80 C 120 60, 220 130, 340 110 S 540 170, 700 130"/>
        <path d="M -20 140 C 140 130, 240 200, 360 170 S 560 230, 720 190"/>
        <path d="M -20 210 C 160 200, 260 260, 380 240 S 580 300, 740 250"/>
        <path d="M -20 290 C 180 280, 300 330, 420 320 S 620 370, 780 330"/>
      </g>

      {/* River squiggle (Cache la Poudre / S Platte hint) */}
      <path d="M 80 360 C 220 340, 340 380, 480 350 S 740 330, 920 360 L 1020 370"
            fill="none" stroke={C_NAVY} strokeOpacity="0.22" strokeWidth="2.5"
            strokeDasharray="0" strokeLinecap="round"/>

      {/* I-25 corridor */}
      <line x1="340" y1="40" x2="340" y2="440"
            stroke={C_NAVY} strokeOpacity="0.18" strokeWidth="2.5" strokeDasharray="6 5"/>
      <text x="354" y="58" fontSize="11" fontFamily='"Brandon Grotesque", sans-serif'
            fontWeight="700" fill={C_NAVY} opacity="0.45" letterSpacing="2">I-25</text>

      {/* Hwy 34 east-west */}
      <line x1="60" y1="240" x2="1020" y2="240"
            stroke={C_NAVY} strokeOpacity="0.14" strokeWidth="1.8" strokeDasharray="4 4"/>

      {/* City labels */}
      <text x="245" y="278" fontSize="22" fontFamily='"Brandon Grotesque", sans-serif'
            fontWeight="700" fill={C_NAVY} letterSpacing="3">LOVELAND</text>
      <text x="245" y="298" fontSize="11" fontFamily='"Brandon Grotesque", sans-serif'
            fontWeight="500" fill={C_MUTE} letterSpacing="2">LARIMER COUNTY</text>

      <text x="710" y="190" fontSize="22" fontFamily='"Brandon Grotesque", sans-serif'
            fontWeight="700" fill={C_NAVY} letterSpacing="3">GREELEY</text>
      <text x="710" y="210" fontSize="11" fontFamily='"Brandon Grotesque", sans-serif'
            fontWeight="500" fill={C_MUTE} letterSpacing="2">WELD COUNTY</text>

      {/* Compass */}
      <g transform="translate(990, 70)">
        <circle r="22" fill="none" stroke={C_NAVY} strokeOpacity="0.3" strokeWidth="1"/>
        <path d="M 0 -16 L 4 0 L 0 16 L -4 0 Z" fill={C_NAVY} opacity="0.5"/>
        <path d="M 0 -16 L 4 0 L 0 0 Z" fill={C_NAVY}/>
        <text x="0" y="-26" textAnchor="middle" fontSize="10" fontFamily='"Brandon Grotesque", sans-serif'
              fontWeight="700" fill={C_NAVY}>N</text>
      </g>

      {/* Scale */}
      <g transform="translate(60, 420)">
        <line x1="0" y1="0" x2="80" y2="0" stroke={C_NAVY} strokeWidth="2"/>
        <line x1="0" y1="-4" x2="0" y2="4" stroke={C_NAVY} strokeWidth="2"/>
        <line x1="80" y1="-4" x2="80" y2="4" stroke={C_NAVY} strokeWidth="2"/>
        <text x="40" y="18" textAnchor="middle" fontSize="10" fontFamily='"Brandon Grotesque", sans-serif'
              fontWeight="600" fill={C_NAVY} letterSpacing="2">~10 MI</text>
      </g>

      {/* PIN 01 — 1117 16th St Greeley */}
      <Pin x={770} y={150} num="01"/>
      {/* PIN 02 — 1940 29th Ave Greeley (just south/west of pin 01) */}
      <Pin x={690} y={170} num="02"/>
      {/* PIN 03 — 1016 Deborah Dr Loveland */}
      <Pin x={210} y={250} num="03"/>
    </svg>
  );
}

function Pin({ x, y, num }) {
  return (
    <g transform={`translate(${x},${y})`}>
      {/* shadow */}
      <ellipse cx="0" cy="6" rx="14" ry="3" fill="#000" opacity="0.18"/>
      {/* drop pin */}
      <path d="M 0 -42 C -16 -42 -26 -30 -26 -16 C -26 -2 -10 8 0 18 C 10 8 26 -2 26 -16 C 26 -30 16 -42 0 -42 Z"
            fill={C_YELLOW} stroke={C_NAVY} strokeWidth="2.5"/>
      <circle r="11" cx="0" cy="-18" fill={C_NAVY}/>
      <text x="0" y="-14" textAnchor="middle" fontSize="13" fontWeight="700"
            fontFamily='"Brandon Grotesque", sans-serif' fill="#fff" letterSpacing="0.5">{num}</text>
    </g>
  );
}

function DirectionC({ d }) {
  const picks = [
    { n: '01', addr: d.p1_address, city: d.p1_city, angle: d.p1_angle, metric: d.p1_metric_value, mlabel: d.p1_metric_label },
    { n: '02', addr: d.p2_address, city: d.p2_city, angle: d.p2_angle, metric: d.p2_metric_value, mlabel: d.p2_metric_label },
    { n: '03', addr: d.p3_address, city: d.p3_city, angle: d.p3_angle, metric: d.p3_metric_value, mlabel: d.p3_metric_label },
  ];

  return (
    <div style={{
      width: 1080, height: 1080,
      background: C_NAVY,
      fontFamily: '"Brandon Grotesque", "Montserrat", sans-serif',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Top header */}
      <div style={{ padding: '44px 60px 26px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{
            fontSize: 13, letterSpacing: '0.24em', fontWeight: 700, color: C_YELLOW,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ width: 22, height: 2, background: C_YELLOW }}></span>
            {d.weekLabel}
          </div>
          <h1 style={{
            margin: '14px 0 0 0',
            fontSize: 56, lineHeight: 0.98, fontWeight: 700, letterSpacing: '-0.01em',
          }}>
            NoCo investor map
          </h1>
          <div style={{ marginTop: 8, fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 640 }}>
            Three picks. Two cities. Three angles — cash-flow, returns, diversification.
          </div>
        </div>
        <img src="assets/wm-logo-horizontal.png"
             style={{ height: 26, width: 'auto', filter: 'brightness(0) invert(1)' }} alt="W+M"/>
      </div>

      {/* Map */}
      <div style={{
        margin: '0 32px',
        height: 460,
        background: C_CREAM,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <NoCoMap/>
      </div>

      {/* Pick callouts */}
      <div style={{
        padding: '28px 32px 18px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 12,
      }}>
        {picks.map((p, i) => (
          <div key={i} style={{
            background: C_NAVY_DEEP,
            border: `1px solid rgba(255,255,255,0.08)`,
            padding: '20px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{
                width: 36, height: 36, background: C_YELLOW, color: C_NAVY,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, fontWeight: 700, letterSpacing: '0.02em',
              }}>{p.n}</div>
              <div style={{
                fontSize: 10, letterSpacing: '0.2em', fontWeight: 700, color: C_YELLOW,
              }}>{p.angle}</div>
            </div>
            <div style={{
              fontSize: 22, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.005em',
            }}>{p.addr}</div>
            <div style={{
              fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 3,
            }}>{p.city}</div>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '14px 0' }}></div>

            <div style={{
              fontFamily: '"EB Garamond", Georgia, serif', fontStyle: 'italic',
              fontWeight: 500, fontSize: 28, color: C_YELLOW, lineHeight: 1,
            }}>{p.metric}</div>
            <div style={{
              fontSize: 10, letterSpacing: '0.2em', fontWeight: 600,
              color: 'rgba(255,255,255,0.6)', marginTop: 6, textTransform: 'uppercase',
            }}>{p.mlabel}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ flex: 1 }}></div>
      <div style={{
        padding: '0 32px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '0.01em' }}>
            {d.agentName}
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2, letterSpacing: '0.04em' }}>
            {d.agentHandle} &nbsp;·&nbsp; {d.agentPhone}
          </div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          fontSize: 13, fontWeight: 600,
        }}>
          <span style={{
            fontFamily: '"EB Garamond", Georgia, serif', fontStyle: 'italic',
            fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 500,
          }}>Comment</span>
          <span style={{
            padding: '8px 16px', background: C_YELLOW, color: C_NAVY,
            fontSize: 13, letterSpacing: '0.22em', fontWeight: 700,
          }}>INVEST</span>
          <span style={{
            fontFamily: '"EB Garamond", Georgia, serif', fontStyle: 'italic',
            fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 500,
          }}>below</span>
        </div>
      </div>
    </div>
  );
}

window.DirectionC = DirectionC;
