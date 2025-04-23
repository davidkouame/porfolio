import competences from "@/data/competences.json"
import portfolios from "@/data/portfolios.json"
import resume from "@/data/resume.json"

export default{
    data(){
        return{
            competences: competences,
            portfolios: portfolios,
            resume: resume
        }
    }
}
