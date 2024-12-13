"use client";
import { Card, CardBody } from "@nextui-org/react";
import './customStyles.css';
import { useState } from 'react';

export default function Home() {
  const cardContents = [
    "Our Team",
    "Our Works",
    "Client Testimonials"
  ];

  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltip1, setShowTooltip1] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const [showTooltip3, setShowTooltip3] = useState(false);
  const [showTooltip5, setShowTooltip5] = useState(false);
  const [showTooltip6, setShowTooltip6] = useState(false);
  const [showTooltip7, setShowTooltip7] = useState(false);
  const [showTooltip8, setShowTooltip8] = useState(false);
  const [showTooltip9, setShowTooltip9] = useState(false);
  const [showTooltip10, setShowTooltip10] = useState(false);
  const [showTooltip11, setShowTooltip11] = useState(false);

  return (
    <div className="container">
      <div className="row" style={{margin:"10rem 0" }}>
        <div className="col-md-12" >
          <div className="video-wrapper" style={{position: 'relative', display: "flex", justifyContent: "center", alignItems: "center"}}>
            
                        {/* 1 */}

            <div className="dot" 
              style={{bottom: '73%', left: '41%'}}
              onMouseEnter={() => setShowTooltip1(true)}
              onMouseLeave={() => setShowTooltip1(false)}
            >
              {showTooltip1 && (
                <div className="tooltip visible">
                  <span>Who we are</span>
                </div>
              )}
            </div>

            {/* 2 */}
            <div className="dot" 
              style={{bottom: '57%', left: '41.5%'}}
              onMouseEnter={() => setShowTooltip2(true)}
              onMouseLeave={() => setShowTooltip2(false)}
            >
              {showTooltip2 && (
                <div className="tooltip visible">
                  <span>What we do</span>
                </div>
              )}
            </div>
            {/* 3 */}
            <div className="dot" 
              style={{bottom: '62%', left: '41.5%'}}
              onMouseEnter={() => setShowTooltip3(true)}
              onMouseLeave={() => setShowTooltip3(false)}
            >
              {showTooltip3 && (
                <div className="tooltip visible">
                  <span>Expertise</span>
                </div>
              )}
            </div>
            {/* 4 */}
            <div 
              className="dot" 
              style={{bottom: '43%', left: '47%'}}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              {showTooltip && (
                <div className="tooltip visible">
                  <span >Promises</span>
                </div>
              )}
            </div>
                    {/* 5 */}

            <div className="dot" 
              style={{bottom: '20%', left: '48.5%'}}
              onMouseEnter={() => setShowTooltip5(true)}
              onMouseLeave={() => setShowTooltip5(false)}
            >
              {showTooltip5 && (
                <div className="tooltip-right visible">
                  <span>Our Founder</span>
                </div>
              )}
            </div>
                                {/* 6 */}
            <div className="dot" 
              style={{bottom: '43%', left: '51%'}}
              onMouseEnter={() => setShowTooltip6(true)}
              onMouseLeave={() => setShowTooltip6(false)}
            >
              {showTooltip6 && (
                <div className="tooltip-right visible">
                  <span>We do</span>
                </div>
              )}
            </div>
            {/* 7 */}

             <div className="dot" 
              style={{bottom: '74%', left: '52%'}}
              onMouseEnter={() => setShowTooltip7(true)}
              onMouseLeave={() => setShowTooltip7(false)}
            >
              {showTooltip7 && (
                <div className="tooltip visible">
                  <span>Values</span>
                </div>
              )}
            </div>

            {/* 8 */}
            <div className="dot" 
              style={{bottom: '64%', left: '56%'}}
              onMouseEnter={() => setShowTooltip8(true)}
              onMouseLeave={() => setShowTooltip8(false)}
            >
              {showTooltip8 && (
                <div className="tooltip-right visible">
                  <span>Mission</span>
                </div>
              )}
            </div>
                                                {/* 9 */}
            <div className="dot" 
              style={{bottom: '84%', left: '52%'}}
              onMouseEnter={() => setShowTooltip9(true)}
              onMouseLeave={() => setShowTooltip9(false)}
            >
              {showTooltip9 && (
                <div className="tooltip visible">
                  <span>Goals</span>
                </div>
              )}
            </div>

                                    {/* 10 */}
            <div className="dot" 
              style={{bottom: '70%', left: '58.5%'}}
              onMouseEnter={() => setShowTooltip10(true)}
              onMouseLeave={() => setShowTooltip10(false)}
            >
              {showTooltip10 && (
                <div className="tooltip-right visible">
                  <span>Vision</span>
                </div>
              )}
            </div>
                                    {/* 11 */}
            <div className="dot" 
              style={{bottom: '93%', left: '60%'}}
              onMouseEnter={() => setShowTooltip11(true)}
              onMouseLeave={() => setShowTooltip11(false)}
            >
              {showTooltip11 && (
                <div className="tooltip-right visible">
                  <span>How we think</span>
                </div>
              )}
            </div>



            <video 
              autoPlay 
              loop 
              muted 
              className="w-100 h-auto mb-4 video-zoom"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            >
              <source src="/yts-cover-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      
      <div className="row" >
        {cardContents.map((content, index) => (
          <div key={index} className="col-md-4 mt-5" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Card className="bg-brand-yellow category-card" style={{height: "44px",display: "flex", justifyContent: "center", alignItems: "center"}}>
              <CardBody>
              <p className="font-bold text-center  category-text m-0">{content}</p>              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}