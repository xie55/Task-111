const main=require("../main/main.js")
const lyrics=require("../main/lyrics.js")
describe('lyrics',function(){

    it("returns lyrics",function(){

        let result=main()
        let lyric=lyrics()

        expect(result).toEqual(lyric)
    })
})