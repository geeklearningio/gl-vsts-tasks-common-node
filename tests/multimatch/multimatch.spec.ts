import matcher = require("../../multimatch");

describe("Multimatch", () => {

    var files = ["C:\\aDirectory\\toto.json", "C:\\aDirectory\\toto.yaml", "C:\\aDirectory\\yaml.toto"];

    it("match simple wildcard", () => {

        var result = matcher.applyMatch("C:\\aDirectory", "*.yaml", files);
        expect(result.length).toEqual(1);
        expect(result[0]).toEqual("C:\\aDirectory\\toto.yaml");
    });

    it("match specific filename", () => {

        var result = matcher.applyMatch("C:\\aDirectory", "toto.yaml", files);
        expect(result.length).toEqual(1);
        expect(result[0]).toEqual("C:\\aDirectory\\toto.yaml");
    });
})