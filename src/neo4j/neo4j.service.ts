import neo4j from 'neo4j-driver'
import {Injectable} from '@nestjs/common'

@Injectable()
export class Neo4jService{
    
    private readonly driver;

    constructor(){
        const {NEO4J_URI, NEO4J_USER,NEO4J_PASSWORD} = process.env
        this.driver = neo4j.driver(NEO4J_URI, neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD))
    }

    async runQuery( query:string, querParams:Record<string, any> ):Promise<any>{
        const session = this.driver.session()
        try{
            const result = await session.run(query, querParams)
            return result.records.map((result)=> result.toObject())
        }finally{
            session.close()
        }
    }
}