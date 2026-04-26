// Direction A — Editorial Typographic
// Clean, minimal, type-driven. Cream background. Numbered list approach.
// W+M brand: Brandon Grotesque (Bold) + EB Garamond italics, navy/yellow accents.

const A_NAVY = '#333E48';
const A_YELLOW = '#E0B03C';
const A_CREAM = '#F5F2ED';
const A_INK = '#1f262d';
const A_RULE = '#cdc6bc';
const A_MUTE = '#6b6358';

const dirAStyles = {
  board: {
    width: 1080, height: 1080,
    background: A_CREAM,
    fontFamily: '"Brandon Grotesque", "Brandon Grot", "Montserrat", sans-serif',
    color: A_INK,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  inner: {
    flex: 1,
    padding: '72px 80px 64px',
    display: 'flex',
    flexDirection: 'column',
  },
};

function DirectionA({ d }) {
  const picks = [
    { n: '01', addr: d.p1_address, city: d.p1_city, type: d.p1_type, angle: d.p1_angle, metric: d.p1_metric_value, mlabel: d.p1_metric_label },
    { n: '02', addr: d.p2_address, city: d.p2_city, type: d.p2_type, angle: d.p2_angle, metric: d.p2_metric_value, mlabel: d.p2_metric_label },
    { n: '03', addr: d.p3_address, city: d.p3_city, type: d.p3_type, angle: d.p3_angle, metric: d.p3_metric_value, mlabel: d.p3_metric_label },
  ];

  return (
    <div style={dirAStyles.board}>
      <div style={dirAStyles.inner}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 36 }}>
          <div>
            <div style={{
              fontSize: 14, letterSpacing: '0.22em', fontWeight: 700,
              color: A_NAVY, textTransform: 'uppercase',
            }}>{d.weekLabel}</div>
            <div style={{
              fontSize: 13, letterSpacing: '0.2em', fontWeight: 500,
              color: A_MUTE, marginTop: 6, textTransform: 'uppercase',
            }}>Northern Colorado · Investor Shortlist</div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            fontSize: 13, letterSpacing: '0.16em', color: A_NAVY, fontWeight: 600, textTransform: 'uppercase',
          }}>
            <span style={{ width: 28, height: 1, background: A_NAVY }}></span>
            <span>3 Picks</span>
          </div>
        </div>

        {/* Headline block */}
        <div style={{ marginBottom: 8 }}>
          <h1 style={{
            margin: 0,
            fontFamily: '"EB Garamond", "Garamond", Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 92,
            lineHeight: 0.98,
            color: A_NAVY,
            letterSpacing: '-0.01em',
          }}>This week's<br/>
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ position: 'relative', zIndex: 2 }}>NoCo</span>
              <span style={{
                position: 'absolute', left: -4, right: -4, bottom: 14, height: 16,
                background: A_YELLOW, opacity: 0.75, zIndex: 1,
              }}></span>
            </span>
            {'\u00a0investment picks.'}
          </h1>
        </div>

        {/* Sub */}
        <div style={{
          marginTop: 18, marginBottom: 26, maxWidth: 760,
          fontSize: 18, lineHeight: 1.45, color: A_MUTE, fontWeight: 400,
        }}>
          Different cities, different angles — cash-flow, returns, and diversification.
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: A_RULE, marginBottom: 22 }}></div>

        {/* Picks list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {picks.map((p, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '70px 1fr 240px',
              alignItems: 'center',
              padding: '24px 0',
              borderBottom: i < 2 ? `1px solid ${A_RULE}` : 'none',
            }}>
              <div style={{
                fontFamily: '"EB Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 56,
                lineHeight: 1,
                color: A_YELLOW,
              }}>{p.n}</div>

              <div>
                <div style={{
                  fontSize: 11, letterSpacing: '0.2em', color: A_NAVY,
                  fontWeight: 700, textTransform: 'uppercase', marginBottom: 6,
                }}>{p.angle}</div>
                <div style={{
                  fontSize: 30, fontWeight: 700, color: A_INK, lineHeight: 1.05,
                  letterSpacing: '-0.005em',
                }}>{p.addr}</div>
                <div style={{
                  fontSize: 16, color: A_MUTE, marginTop: 4, fontWeight: 400,
                }}>{p.city} &nbsp;·&nbsp; {p.type}</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: '"EB Garamond", Georgia, serif',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: 38,
                  color: A_NAVY,
                  lineHeight: 1,
                }}>{p.metric}</div>
                <div style={{
                  fontSize: 11, letterSpacing: '0.18em', color: A_MUTE,
                  fontWeight: 600, textTransform: 'uppercase', marginTop: 6,
                }}>{p.mlabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ flex: 1 }}></div>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 22, borderTop: `1px solid ${A_RULE}`, marginTop: 18,
        }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: A_INK, letterSpacing: '0.01em' }}>
              {d.agentName}
            </div>
            <div style={{ fontSize: 13, color: A_MUTE, marginTop: 3, letterSpacing: '0.04em' }}>
              {d.agentHandle} &nbsp;·&nbsp; {d.agentPhone}
            </div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <div style={{
              fontFamily: '"EB Garamond", Georgia, serif', fontStyle: 'italic',
              fontSize: 16, color: A_NAVY,
            }}>Comment</div>
            <div style={{
              padding: '10px 18px', background: A_NAVY, color: '#fff',
              fontSize: 13, letterSpacing: '0.22em', fontWeight: 700,
            }}>INVEST</div>
            <div style={{
              fontFamily: '"EB Garamond", Georgia, serif', fontStyle: 'italic',
              fontSize: 16, color: A_NAVY,
            }}>below</div>
          </div>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4,
          }}>
            <img src="assets/wm-logo-horizontal.png" style={{ height: 28, width: 'auto' }} alt="W+M"/>
          </div>
        </div>
      </div>
    </div>
  );
}

window.DirectionA = DirectionA;
