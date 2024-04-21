import React from "react";

// eslint-disable-next-line react/prop-types
const Breadcrumb = ({ breadcrumb_items = [] }) => {
  return (
    <div>
      <style>
        {
          `
        .breadcrumb-container {
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 4px;
        }
        .breadcrumb-container > p {
          text-decoration: underline;
          color: #fafafa;
        }
        `
        }
      </style>
      <div className='breadcrumb-container'>
        {
          breadcrumb_items?.map((item, idx) => <React.Fragment key={`${item}-${idx}`} >
            <p >{item}</p>
            {(idx < breadcrumb_items?.length - 1) && ">"}
          </React.Fragment>
          )
        }
      </div>
    </div>
  );
};

export default Breadcrumb;