
// svg library ====================================
const SVG_NAMSPACE = "http://www.w3.org/2000/svg";
const doc = document;

const _create = (type) => doc.createElementNS(SVG_NAMSPACE, type);

const _remove = dom => dom.remove();

const _setAttr = (dom, key, value) =>  { 
  dom.setAttributeNS(null, key, value);
}

const _attr = (dom, attrObj) => {
  for(let key in attrObj) {
    _setAttr(dom, key, attrObj[key]);
  }
}

const _removeAttr = (dom, key) => {
  dom.removeAttributeNS(null, key);
}

const _appendChild = (dom, child) => {
  dom.appendChild(child.dom);
}

/**
 * SvgDom
 * @param {SVGAElement?} dom 
 */
const SvgDom = function(dom) {
  if(dom) {
    this.dom = dom;
  }
};

SvgDom.prototype.create = function(type) {
  this.dom = _create(type);

  return this;
};

SvgDom.prototype.remove = function() {
  _remove(this.dom);
};

SvgDom.prototype.attr = function(p1, p2) {
  if(typeof p1 === "object") {
    _attr(this.dom, p1);

    return this;
  }

  _attr(this.dom, {[p1] : p2});

  return this;
};

SvgDom.prototype.rmAttr = function(key) {
  _removeAttr(this.dom, key);
};

SvgDom.prototype.appendChild = function(SvgDom) {
  _appendChild(this.dom, SvgDom);
};

SvgDom.prototype.wrapper = function(dom) {
  return new SvgDom(dom);
};

//=================================================

