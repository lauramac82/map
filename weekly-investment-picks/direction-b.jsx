// Direction B — Data-forward grid
// Top hero band with headline (navy), 3 stacked cards with the metric LARGE.
// White background. Navy hero + yellow accents. Punchy, scannable for IG.

const B_NAVY = '#333E48';
const B_YELLOW = '#E0B03C';
const B_LIGHT = '#E8E5E2';
const B_INK = '#1f262d';
const B_MUTE = '#6b6358';

function DirectionB({ d }) {
  const picks = [
    { n: '01', addr: d.p1_address, city: d.p1_city, type: d.p1_type, angle: d.p1_angle, metric: d.p1_metric_value, mlabel: d.p1_metric_label, chips: [d.p1_chip1, d.p1_chip2, d.p1_chip3] },
    { n: '02', addr: d.p2_address, city: d.p2_city, type: d.p2_type, angle: d.p2_angle, metric: d.p2_metric_value, mlabel: d.p2_metric_label, chips: [d.p2_chip1, d.p2_chip2, d.p2_chip3] },
    { n: '03', addr: d.p3_address, city: d.p3_city, type: d.p3_type, angle: d.p3_angle, metric: d.p3_metric_value, mlabel: d.p3_metric_label, chips: [d.p3_chip1, d.p3_chip2, d.p3_chip3] },
  ];

  return (
    <div style={{
      width: 1080, height: 1080,
      background: '#fff',
      fontFamily: '"Brandon Grotesque", "Montserrat", sans-serif',
      color: B_INK,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Hero band */}
      <div style={{
        background: B_NAVY,
        color: '#fff',
        padding: '52px 64px 44px',
        position: 'relative',
      }}>
        {/* top meta row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 28,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            fontSize: 13, letterSpacing: '0.22em', fontWeight: 700, color: B_YELLOW,
          }}>
            <span style={{ width: 24, height: 2, background: B_YELLOW }}></span>
            <span>{d.weekLabel}</span>
          </div>
          <img src="assets/wm-logo-horizontal.png"
               style={{ height: 24, width: 'auto', filter: 'brightness(0) invert(1)' }} alt="W+M"/>
        </div>

        <h1 style={{
          margin: 0,
          fontSize: 70,
          lineHeight: 0.98,
          fontWeight: 700,
          letterSpacing: '-0.01em',
        }}>
          NoCo Investment <span style={{
            fontFamily: '"EB Garamond", Georgia, serif',
            fontStyle: 'italic', fontWeight: 500, color: B_YELLOW,
          }}>Picks</span>
        </h1>

        <div style={{
          marginTop: 16, fontSize: 18, lineHeight: 1.4, color: 'rgba(255,255,255,0.78)',
          maxWidth: 720, fontWeight: 400,
        }}>
          Three Northern Colorado plays — different cities, different angles.
        </div>
      </div>

      {/* Cards */}
      <div style={{
        flex: 1,
        padding: '28px 32px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}>
        {picks.map((p, i) => (
          <div key={i} style={{
            background: '#fff',
            border: `1.5px solid ${B_LIGHT}`,
            display: 'grid',
            gridTemplateColumns: '90px 1fr 280px',
            alignItems: 'stretch',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Number column */}
            <div style={{
              background: B_YELLOW,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 44, fontWeight: 700, color: B_NAVY,
              fontFamily: '"Brandon Grotesque", sans-serif',
              letterSpacing: '-0.01em',
            }}>{p.n}</div>

            {/* Body column */}
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{
                fontSize: 11, letterSpacing: '0.22em', fontWeight: 700,
                color: B_MUTE, textTransform: 'uppercase', marginBottom: 6,
              }}>{p.angle}</div>
              <div style={{
                fontSize: 26, fontWeight: 700, color: B_INK, lineHeight: 1.05,
                letterSpacing: '-0.005em',
              }}>{p.addr}</div>
              <div style={{ fontSize: 14, color: B_MUTE, marginTop: 4, fontWeight: 400 }}>
                {p.city} &nbsp;·&nbsp; {p.type}
              </div>
              <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
                {p.chips.map((c, j) => (
                  <span key={j} style={{
                    fontSize: 10, letterSpacing: '0.14em', fontWeight: 700,
                    color: B_NAVY, background: B_LIGHT, textTransform: 'uppercase',
                    padding: '5px 9px',
                  }}>{c}</span>
                ))}
              </div>
            </div>

            {/* Metric column */}
            <div style={{
              background: B_NAVY, color: '#fff',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '12px 16px',
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: 38, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.01em',
              }}>{p.metric}</div>
              <div style={{
                fontSize: 10, letterSpacing: '0.22em', color: B_YELLOW,
                fontWeight: 700, textTransform: 'uppercase', marginTop: 8,
              }}>{p.mlabel}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        background: B_LIGHT,
        padding: '20px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: B_NAVY, letterSpacing: '0.01em' }}>
            {d.agentName}
          </div>
          <div style={{ fontSize: 12, color: B_MUTE, marginTop: 2, letterSpacing: '0.04em' }}>
            {d.agentHandle} &nbsp;·&nbsp; {d.agentPhone}
          </div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '10px 18px', background: B_NAVY, color: '#fff',
        }}>
          <span style={{ fontSize: 12, letterSpacing: '0.18em', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
            COMMENT
          </span>
          <span style={{ fontSize: 14, letterSpacing: '0.22em', fontWeight: 700, color: B_YELLOW }}>
            INVEST
          </span>
          <span style={{ fontSize: 12, letterSpacing: '0.18em', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
            BELOW
          </span>
        </div>
      </div>
    </div>
  );
}

window.DirectionB = DirectionB;
