// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Topology from 'grommet/components/Topology';
import InteractiveExample from '../../../components/InteractiveExample';

Topology.displayName = 'Topology';

export default class TopologyExamplesDoc extends Component {
  render () {
    let element = (
      <Topology a11yTitle='Server Topology' links={[
        {colorIndex: "graph-1", ids: ["s1p1", "s2p1"]},
        {colorIndex: "graph-1", ids: ["s1p1", "s2p1"]},
        {colorIndex: "graph-1", ids: ["s1p2", "s2p2"]},
        {colorIndex: "graph-2", ids: ["em1p2", "em2p1"]},
        {colorIndex: "graph-2", ids: ["em2p2", "em3p1"]},
        {colorIndex: "graph-2", ids: ["em3p2", "em4p1"]},
        {colorIndex: "graph-2", ids: ["em4p2", "em1p1"]},
        {colorIndex: "graph-2", ids: ["s2p14", "s2p8"]},
        {colorIndex: "graph-2", ids: ["em4p2", "s2p8"]}
      ]}>
        <Topology.Parts direction="row">

          <Topology.Part a11yTitle='rack'
            className="rack" direction="column">

            <Topology.Part a11yTitle='switch'
              className="switch" direction="column">
              <Topology.Parts direction="row">
                <Topology.Part id="s1p1" status="ok" label="1"
                  direction="column" demarcate={false} />
                <Topology.Part id="s1p2" status="ok" label="2"
                  direction="column" demarcate={false} />
                <Topology.Part id="s1p3" status="ok" label="3"
                  direction="column" demarcate={false} />
                <Topology.Part id="s1p4" status="ok" label="4"
                  direction="column" demarcate={false} />
                <Topology.Part id="s1p5" status="ok" label="5"
                  direction="column" demarcate={false} />
                <Topology.Part id="s1p6" status="ok" label="6"
                  direction="column" demarcate={false} />
                <Topology.Part id="s1p7" status="ok" label="7"
                  direction="column" demarcate={false} />
                <Topology.Part id="s1p8" status="ok" label="8"
                  direction="column" demarcate={false} />
              </Topology.Parts>
              <Topology.Label>HP 3100 SI</Topology.Label>
            </Topology.Part>

            <Topology.Part a11yTitle='enclosure'
              className="enclosure" direction="column">
              <Topology.Part className="em"
                label="HP Virtual Connect FlexFabric-20/40 F8 Module" />
              <Topology.Part className="em"
                label="HP Virtual Connect FlexFabric-20/40 F8 Module" />
              <Topology.Parts direction="row">
                <Topology.Part className="em">
                  <Topology.Parts direction="column">
                    <Topology.Part id="em1p1" status="ok" label="1"
                      demarcate={false} align="center" />
                    <Topology.Part id="em1p2" status="ok" label="2"
                      demarcate={false} align="center" />
                  </Topology.Parts>
                </Topology.Part>
                <Topology.Part a11yTitle='fan 1 ok'
                  className="fan" status="ok" label="1" align="center" />
                <Topology.Part className="fan" />
                <Topology.Part a11yTitle='fan 3 ok' className="fan"
                  status="ok" label="3" align="center" />
              </Topology.Parts>
              <Topology.Part className="em"
                label="HP Virtual Connect FlexFabric-20/40 F8 Module" />
              <Topology.Parts direction="row">
                <Topology.Part className="em">
                  <Topology.Parts direction="column">
                    <Topology.Part id="em2p1" status="ok" label="1"
                      demarcate={false} align="center" />
                    <Topology.Part id="em2p2" status="ok" label="2"
                      demarcate={false} align="center" />
                  </Topology.Parts>
                </Topology.Part>
                <Topology.Part className="fan" status="ok" label="4"
                  align="center" />
                <Topology.Part className="fan" status="ok" label="5"
                  align="center" />
                <Topology.Part className="fan" status="ok" label="6"
                  align="center" />
              </Topology.Parts>
            </Topology.Part>

          </Topology.Part>

          <Topology.Part a11yTitle='rack'
            className="rack" direction="column">

            <Topology.Part a11yTitle='switch'
              className="switch" direction="column">
              <Topology.Parts direction="row">
                <Topology.Part id="s2p1" status="ok" label="1"
                  direction="column" demarcate={false} />
                <Topology.Part id="s2p2" status="ok" label="2"
                  direction="column" demarcate={false} />
                <Topology.Part id="s2p3" status="ok" label="3"
                  direction="column" demarcate={false} />
                <Topology.Part id="s2p4" status="ok" label="4"
                  direction="column" demarcate={false} />
                <Topology.Part id="s2p5" status="ok" label="5"
                  direction="column" demarcate={false} />
                <Topology.Part id="s2p6" status="ok" label="6"
                  direction="column" demarcate={false} />
                <Topology.Part id="s2p7" status="ok" label="7"
                  direction="column" demarcate={false} />
                <Topology.Part id="s2p8" status="ok" label="8"
                  direction="column" demarcate={false} />
                <Topology.Part id="s2p9" status="ok" label="9"
                  direction="column" demarcate={false} />
                <Topology.Part id="s2p10" status="ok" label="10"
                  direction="column" demarcate={false} />
              </Topology.Parts>
              <Topology.Label>HP 5920AF-24XG</Topology.Label>
              <Topology.Parts direction="row">
                <Topology.Part id="s2p11" status="ok" label="11"
                  direction="column" demarcate={false} reverse={true} />
                <Topology.Part id="s2p12" status="ok" label="12"
                  direction="column" demarcate={false} reverse={true} />
                <Topology.Part id="s2p13" status="ok" label="13"
                  direction="column" demarcate={false} reverse={true} />
                <Topology.Part id="s2p14" status="ok" label="14"
                  direction="column" demarcate={false} reverse={true} />
                <Topology.Part id="s2p15" status="ok" label="15"
                  direction="column" demarcate={false} reverse={true} />
                <Topology.Part id="s2p16" status="ok" label="16"
                  direction="column" demarcate={false} reverse={true} />
                <Topology.Part id="s2p17" status="ok" label="17"
                  direction="column" demarcate={false} reverse={true} />
                <Topology.Part id="s2p18" status="ok" label="18"
                  direction="column" demarcate={false} reverse={true} />
                <Topology.Part id="s2p19" status="ok" label="19"
                  direction="column" demarcate={false} reverse={true} />
                <Topology.Part id="s2p20" status="ok" label="20"
                  direction="column" demarcate={false} reverse={true} />
              </Topology.Parts>
            </Topology.Part>

            <Topology.Part a11yTitle='enclosure'
              className="enclosure" direction="column">
              <Topology.Parts direction="row">
                <Topology.Part className="em">
                  <Topology.Parts direction="column">
                    <Topology.Part id="em3p1" status="ok" label="1"
                      demarcate={false} align="center" />
                    <Topology.Part id="em3p2" status="ok" label="2"
                      demarcate={false} align="center" />
                  </Topology.Parts>
                </Topology.Part>
                <Topology.Part className="fan" status="ok" label="1"
                  align="center" />
                <Topology.Part className="fan" status="ok" label="2"
                  align="center" />
                <Topology.Part className="fan" status="ok" label="3"
                  align="center" />
              </Topology.Parts>
              <Topology.Part className="em"
                label="HP Virtual Connect FlexFabric-20/40 F8 Module" />
              <Topology.Parts direction="row">
                <Topology.Part className="em">
                  <Topology.Parts direction="column">
                    <Topology.Part id="em4p1" status="ok" label="1"
                      demarcate={false} align="center" />
                    <Topology.Part id="em4p2" status="ok" label="2"
                      demarcate={false} align="center" />
                  </Topology.Parts>
                </Topology.Part>
                <Topology.Part className="fan" status="ok" label="4"
                  align="center" />
                <Topology.Part className="fan" status="ok" label="5"
                  align="center" />
                <Topology.Part className="fan" status="ok" label="6"
                  align="center" />
              </Topology.Parts>
            </Topology.Part>

          </Topology.Part>

        </Topology.Parts>
      </Topology>
    );

    return (
      <InteractiveExample contextLabel='Topology' contextPath='/docs/topology'
        preamble={`import Topology from 'grommet/components/Topology';`}
        element={element} />
    );
  }
};
