import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import UIData from "./Components/Sandbox_UI-Data";

const uiExamples = () => {
  const UIHeaders = UIData.filter(function (item) {
    return item.section === "Header";
  });

  const UIImages = UIData.filter(function (item) {
    return item.section === "Images";
  });

  const UIContact = UIData.filter(function (item) {
    return item.section === "Contact";
  });

  const UIFooters = UIData.filter(function (item) {
    return item.section === "Footer";
  });

  const UITheme = UIData.filter(function (item) {
    return item.section === "Theme";
  });

  const UIContentCount =
    UIHeaders.length +
    UIImages.length +
    UIContact.length +
    UIFooters.length +
    UITheme.length;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sandbox | Home</title>
        </Helmet>
      </HelmetProvider>
      <main className="home__projects-wrap">
        <div className="home__projects-content">
          <h1>Welcome To The Sandbox!</h1>
          {UIContentCount > 0 && (
            <>
              <h2>UI examples</h2>
              <p id="uiBlurb">
                occasionally, a client will withdraw from a project before it's
                completed. <br /> rather than let my partial work go to waste,
                these are examples of what you could have if you're unsure of
                your own designs.
              </p>
              <div className="home__UI-content_grid">
                {UIHeaders.length > 0 && (
                  <>
                    <div className="home__UI-content_grid-row">
                      {UIHeaders.map((card) => (
                        <div
                          className="home__UI_card-wrap"
                          id="home__UI-headers_card"
                          key={card.id}
                        >
                          <Link to={card.link} target="_blank">
                            <img src={card.image} alt={card.image} />
                          </Link>
                          <div className="home__UI_card-body">
                            <h5>
                              {card.section}: {card.type}
                            </h5>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {UIImages.length > 0 && (
                  <>
                    <div className="home__UI-content_grid-row split">
                      {UIImages.map((card) => (
                        <div
                          className="home__UI_card-wrap"
                          id="home__UI-headers_card"
                          key={card.id}
                        >
                          <Link to={card.link} target="_blank">
                            <img src={card.image} alt={card.image} />
                          </Link>
                          <div className="home__UI_card-body">
                            <h5>
                              {card.section}: {card.type}
                            </h5>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {UIContact.length > 0 && (
                  <>
                    <div className="home__UI-content_grid-row split">
                      {UIContact.map((card) => (
                        <div
                          className="home__UI_card-wrap"
                          id="home__UI-headers_card"
                          key={card.id}
                        >
                          <Link to={card.link} target="_blank">
                            <img src={card.image} alt={card.image} />
                          </Link>
                          <div className="home__UI_card-body">
                            <h5>
                              {card.section}: {card.type}
                            </h5>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {UIFooters.length > 0 && (
                  <>
                    <div className="home__UI-content_grid-row">
                      {UIFooters.map((card) => (
                        <div
                          className="home__UI_card-wrap"
                          id="home__UI-headers_card"
                          key={card.id}
                        >
                          <Link to={card.link} target="_blank">
                            <img src={card.image} alt={card.image} />
                          </Link>
                          <div className="home__UI_card-body">
                            <h5>
                              {card.section}: {card.type}
                            </h5>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {UITheme.length > 0 && (
                  <>
                    <div className="home__UI-content_grid-row split">
                      {UITheme.map((card) => (
                        <div
                          className="home__UI_card-wrap"
                          id="home__UI-headers_card"
                          key={card.id}
                        >
                          <Link to={card.link} target="_blank">
                            <img src={card.image} alt={card.image} />
                          </Link>
                          <div className="home__UI_card-body">
                            <h5>
                              {card.section}: {card.type}
                            </h5>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default uiExamples;
