// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';

export default class Mobile extends Component {

  render () {
    return (
      <DocsArticle title="Mobile">
        <section>
          <p>Mobile is not just different screen sizes. Mobile devices actually
          change the fundamental user experience of common tasks. Embrace
          the devices and their native capabilities.</p>

          <dl>
            <dt>Think mobile first</dt>
            <dd>Designing for mobile first is very beneficial even if your
            main focus is not on mobile. Doing so can help eliminate
            nonessential
            information while reinforcing the most important information.</dd>

            <dt>Consider new use cases</dt>
            <dd>What are the scenarios where people will be using your
            application outside of the traditional desktop environment?
            Reevaluate the need to have some features and capabilities
            designed for smaller screens. Take advantage of the capabilities
            that mobile devices have to offer, such as a camera and 
            notifications, when designing your application.</dd>

            <dt>New devices sizes</dt>
            <dd>Do not plan your designs with a specific and unique
            resolution in mind. Consider that new devices are launched 
            throughout the year. The more fluid your design is, the better 
            your application will behave, regardless of the resolution 
            and density of the screen.</dd>

            <dt>New device capabilities: GPS, camera, accelerometer, etc.</dt>
            <dd>You can use these new capabilities to implement features that
            require geopositioning and location. Use the device orientation
            to provide a different view of the same screen or some related
            data.</dd>

            <dt>Gestures</dt>
            <dd>Users become accustomed to gesture support on their platform.
            Swiping, pinching, zooming, and even multi-finger gestures are
            becoming commonplace in mobile applications.</dd>

            <dt>Appropriately sized tap targets</dt>
            <dd>A fingertip is less precise than a mouse pointer therefore
            needs a larger target. When designing for mobile, remember to
            increase the size of buttons, form elements, and controls.</dd>

            <dt>No hover</dt>
            <dd>Without the capacity to hover on elements on a touch screen,
            be careful with the type of information or interaction that
            you associate with this action on the desktop version.</dd>

            <dt>A desktop experience is not a mobile experience</dt>
            <dd>Consider the context in which people will be using your
            application. Desktop and mobile experiences are far from seamless.
            For example, if you have a secondary feature that is composed
            of several steps and interactions, you may leave this experience
            for the desktop version only.</dd>

            <dt>Selection is preferred over input controls</dt>
            <dd>It is much easier to select a value from a pre-populated
            list than it is to input a value into a field using a (virtual)
            keyboard.</dd>
          </dl>
        </section>
      </DocsArticle>
    );
  }
};
