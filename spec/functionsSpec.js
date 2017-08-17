describe("Text interpolation and matching", function(){
  it("confirms that text is assembled", function(){
    expect(addText("abc")).toEqual("abc this is the new part: blah blah & 321")
  })

  it("checks matching", function(){
    expect(addText("abc")).toMatch("321")
  })

  it("checks not matching", function(){
    expect(addText('abc')).not.toMatch("456")
  })

  it("checks matching with regex", function(){
    expect(addText('abc')).toMatch(/321/)
  })

  it("checks not matching with regex", function(){
    expect(addText('abc')).not.toMatch(/456/)
  })
})