import React from "react";
import "./topNambedInput.css";
function TopNambedInput({
  inputClassName,
  ref,
  min,
  preview,
  name,
  max,
  onChange,
  value,
  labelClassName,
  id,
  type,
  label,
  spanText,
  spanClassName,
  required,
  styleClassInputLabel,
  textInputLabelStyle,
  imageLabel,
  fileName
}) {
  return (
    <>
      <label className={`labelForm ${labelClassName}`} htmlFor={id}>
        {label} <span className={spanClassName}>{spanText}</span>
      </label>

      {styleClassInputLabel ? (
        <label htmlFor={id} className={preview?'label-file px-3 text-center  mb-4 mt-1':styleClassInputLabel}>
          <div className={styleClassInputLabel && "mt-2"}>
            {preview
              ? ""
              : imageLabel && <img src={imageLabel} alt="imageLabel" />}
            {preview ? (
              <div className="d-flex align-items-center  justify-content-between w-100 mt-4">
         <div className="d-flex align-items-center ">

  <div className="flex-shrink-0">
  <img
                    src={preview}
                    alt="preview"
                    width={34}
                    height={34}
                    className="image-preview"
                    />
  </div>
  <div className="flex-grow-1 ms-3">
   {fileName}
  </div>
                    </div>

                 
              
                <h6 className="mt-1" style={{color:'#5DAD1F'}}>Cambiar</h6>{" "}
              </div>
            ) : (
              textInputLabelStyle && (
                <p>
                  <b style={{ color: "#6AA6FF" }}>Sube tu capture</b>{" "}
                  {textInputLabelStyle}
                </p>
              )
            )}
          </div>
          <input
            type={type}
            id={id}
            className={inputClassName}
            onChange={(e) => onChange(e)}
            required={required}
            accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
          />
        </label>
      ) : (
        <input
          type={type}
          value={value}
          min={min}
          name={name}
          onChange={(e) => onChange(e.target.value, e.target.name)}
          max={max}
          id={id}
          className={inputClassName}
          required={required}
        />
      )}
    </>
  );
}

export default TopNambedInput;
