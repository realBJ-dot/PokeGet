import { Pagination, Container, Row, Col,Card } from "react-bootstrap";
import { useState } from "react";
export const PageComponent = (pokemons: any[] | []) => {
    const rowsPerPage = 10;
    const [page, setPage] = useState(1);
    const pokeArray = Object.values(pokemons); 
    const arrayLength = pokeArray.length;
    const [paginatedPoke, setPaginatedPoke] = useState<any[] | []>([]);
    const [paginatedPoke2, setPaginatedPoke2] = useState<any[] | []>([]);

    const handleClick = (page: number) => {
        if (page <= 0 || page > 5) return;
        setPage(page);
        const pageIndex = page - 1;
        const firstIndex = pageIndex * rowsPerPage;
        const lastIndex = pageIndex * rowsPerPage + rowsPerPage;
        // first half of pokes
        setPaginatedPoke(pokeArray.slice(0, (arrayLength / 2) - 1).slice(firstIndex, lastIndex)); 
        // second half of pokes
        setPaginatedPoke2(pokeArray.slice(arrayLength / 2, arrayLength - 1 ).slice(firstIndex, lastIndex)); 
      };
    return (
        <>
        <Container style={{ display: 'block', width: 700, padding: 30 }}>
        <Row>
          <Col>
          {paginatedPoke && paginatedPoke.map(poke => {
            return (<Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} />

                    <Card.Body>
                      <Card.Title>
                        Hi, I am {poke.name}
                      </Card.Title>
                      
                    </Card.Body>
                    
                    </Card>);
          })}
          </Col>
          <Col>
          {paginatedPoke2 && paginatedPoke2.map(poke => {
            return (<Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} />

                    <Card.Body>
                      <Card.Title>
                        Hi, I am {poke.name}
                      </Card.Title>
                      
                    </Card.Body>
                    
                    </Card>);
          })}
          </Col>
        </Row>
      </Container>
        <Pagination style={{alignItems : 'center', justifyContent: 'center'}}>
        <Pagination.Prev onClick={() => handleClick(page-1)}></Pagination.Prev>

        <Pagination.Item onClick={() => handleClick(1)} active={1 === page}>{1}</Pagination.Item>
        <Pagination.Item onClick={() => handleClick(2)} active={2 === page}>{2}</Pagination.Item>

        <Pagination.Item onClick={() => handleClick(3)} active={3 === page}>{3}</Pagination.Item>
        <Pagination.Item onClick={() => handleClick(4)} active={4 === page}>{4}</Pagination.Item>
        <Pagination.Item onClick={() => handleClick(5)} active={5 === page}>{5}</Pagination.Item>
        <Pagination.Next onClick={() => handleClick(page+1)}></Pagination.Next>
        </Pagination>
        </>
    )
}