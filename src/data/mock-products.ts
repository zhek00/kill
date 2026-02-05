export interface Product {
    id: string;
    slug: string;
    title: string;
    location: string;
    descriptionShort: string;
    description: string;
    originalPrice?: string;
    currentPrice: string;
    discount?: number;
    savings?: string;
    installments?: string;
    isExclusive?: boolean;
    megaPromo?: boolean;
    images: string[];
    rules: string[];
    address: {
        street: string;
        city: string;
        state: string;
        zip?: string;
    };
    highlights?: string[];
    category?: string;
    categories?: string[];
    idv?: string;
}

export const PRODUCTS: Product[] = [
    // Featured Offers
    {
        id: "feat-1",
        idv: "MD-1",
        slug: "itapema-park-passaporte-1-dia",
        title: "Itapema Park | Passaporte de 1 dia no parque aquático",
        location: "Alvorada",
        descriptionShort: "Venha se divertir no maior complexo de lazer do sul do país! Atrações para todas as idades.",
        description: `O Itapema Park é o destino perfeito para o seu verão! Com diversas atrações aquáticas, rampas molhadas, piscinas infantis e adultas, e muita área verde.`,
        originalPrice: "45,00",
        currentPrice: "29,90",
        savings: "15,10",
        discount: 34,
        installments: "6X",
        isExclusive: true,
        images: [
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20251111095957_1762865997359-11.webp",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/parque-das-aguas-viamao-passaporte-oferta-20251111-13.webp"
        ],
        rules: ["Cupom válido até 30/03/2026", "Sem limite de cupons por pessoa"],
        address: { street: "RS 118, Km 27", city: "Alvorada", state: "RS" },
        highlights: ["Rampas Molhadas", "Piscinas Térmicas"],
        categories: ["parques-aquaticos", "lazer-poa", "mega-promo"]
    },
    {
        id: "feat-2",
        idv: "feat-2",
        slug: "parque-das-aguas-viamao",
        title: "Clube Parque das Águas Viamão | Passaporte de 1 dia no parque aquático",
        location: "Viamão",
        descriptionShort: "Diversão garantida para toda a família em Viamão!",
        description: "Aproveite o dia no Clube Parque das Águas com piscinas, toboáguas e churrasqueiras.",
        originalPrice: "65,00",
        currentPrice: "54,90",
        savings: "10,10",
        discount: 16,
        isExclusive: true,
        images: [
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/parque-das-aguas-viamao-passaporte-oferta-20251111-13.webp"
        ],
        rules: ["Validade: 90 dias", "Obrigatório agendamento"],
        address: { street: "Estrada da Branquinha, 1000", city: "Viamão", state: "RS" },
        categories: ["parques-aquaticos", "lazer-poa"]
    },
    {
        id: "feat-3",
        idv: "feat-3",
        slug: "paraiso-park-passaporte",
        title: "Paraíso Park | Passaporte de 1 dia no parque aquático",
        location: "Alvorada",
        descriptionShort: "Um paraíso de águas e diversão em Alvorada.",
        description: "Curta o verão no Paraíso Park. Toboáguas radicais e área infantil.",
        originalPrice: "55,00",
        currentPrice: "19,90",
        savings: "35,10",
        discount: 64,
        isExclusive: true,
        images: [
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20231025092612-14.webp"
        ],
        rules: ["Válido para finais de semana e feriados"],
        address: { street: "Estrada dos Pires, 500", city: "Alvorada", state: "RS" },
        categories: ["parques-aquaticos", "lazer-poa", "mega-promo"]
    },
    {
        id: "feat-4",
        idv: "feat-4",
        slug: "don-aurelio-rodizio-pizzas",
        title: "Don Aurélio | Rodízio de Pizzas com Sushi, Temaki e Refrigerante",
        location: "Porto Alegre",
        descriptionShort: "O melhor rodízio de pizzas e sushi da cidade!",
        description: "Saboreie pizzas doces e salgadas, além de um buffet completo de sushis e temakis.",
        originalPrice: "109,00",
        currentPrice: "97,90",
        savings: "11,10",
        discount: 23,
        category: "PIZZAS",
        images: [
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20250626112950-15.webp",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/Pizzaria-Don-Aurelio-20250328152017-22.webp"
        ],
        rules: ["Não inclui bebidas alcoólicas", "Jantar: Terça a Domingo"],
        address: { street: "Av. Protásio Alves, 1234", city: "Porto Alegre", state: "RS" },
        categories: ["gastro-poa", "pizzarias"]
    },
    {
        id: "feat-5",
        idv: "feat-5",
        slug: "marina-park",
        title: "Marina Park | Ingresso de 1 dia para o parque aquático",
        location: "Capão da Canoa",
        descriptionShort: "Diversão no litoral gaúcho!",
        description: "O Marina Park oferece atrações incríveis para quem está no litoral.",
        originalPrice: "250,00",
        currentPrice: "145,00",
        savings: "105,00",
        discount: 42,
        installments: "12X",
        images: [
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20260120153413_1768934053595-23.webp"
        ],
        rules: ["Uso obrigatório de traje de banho"],
        address: { street: "Estrada do Mar, Km 30", city: "Capão da Canoa", state: "RS" },
        categories: ["parques-aquaticos", "litoral-gaucho"]
    },
    {
        id: "feat-6",
        idv: "HB-desk-1-3",
        slug: "guardioes-da-pizza",
        title: "Guardiões da Pizza - Porto Alegre | Rodízio de Pizzas Temático",
        location: "Porto Alegre",
        descriptionShort: "Uma experiência gastronômica heróica!",
        description: "Rodízio temático com os heróis mais famosos. Pizzas deliciosas e um ambiente incrível.",
        originalPrice: "99,90",
        currentPrice: "85,90",
        savings: "14,00",
        discount: 14,
        megaPromo: true,
        images: [
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20250328152502-24.webp"
        ],
        rules: ["Necessário reservar com antecedência"],
        address: { street: "Rua Anita Garibaldi, 500", city: "Porto Alegre", state: "RS" },
        categories: ["gastro-poa", "pizzarias", "mega-promo"]
    },
    {
        id: "feat-7",
        idv: "HB-desk-1-2",
        slug: "acquamotion-gramado",
        title: "Acquamotion | Parque aquático com águas termais em Gramado",
        location: "Gramado",
        descriptionShort: "Águas termais em qualquer estação do ano!",
        description: "Primeiro parque aquático indoor e termal da América do Sul. Diversão garantida faça chuva ou faça sol.",
        originalPrice: "259,00",
        currentPrice: "129,50",
        savings: "129,50",
        discount: 50,
        megaPromo: true,
        installments: "12X",
        images: [
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20251023152202_1761243722517-25.webp"
        ],
        rules: ["Toalhas e armários cobrados à parte"],
        address: { street: "Estrada Municipal Linha Ávila, 500", city: "Gramado", state: "RS" },
        categories: ["parques-aquaticos", "lazer-serra", "mega-promo", "serra-gaucha"]
    },
    {
        id: "feat-8",
        idv: "feat-8",
        slug: "restaurante-pouso-novo",
        title: "RESTAURANTE POUSO NOVO - GRAMADO | Buffet LIVRE",
        location: "Gramado",
        descriptionShort: "Tradição e sabor na Serra Gaúcha.",
        description: "Buffet livre com saladas, pratos quentes, churrasco e sobremesas.",
        originalPrice: "110,00",
        currentPrice: "59,90",
        savings: "50,10",
        discount: 46,
        megaPromo: true,
        images: [
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20211116093439-26.jpg"
        ],
        rules: ["Não inclui transporte"],
        address: { street: "Rua Garibaldi, 300", city: "Gramado", state: "RS" },
        categories: ["gastro-serra", "mega-promo", "serra-gaucha"]
    },
    // Selected Experiences
    {
        id: "sel-2",
        idv: "sel-2",
        slug: "toca-da-bruxa-canela",
        title: "Toca da Bruxa Canela | Rodízio de Pizzas Temático",
        location: "Canela",
        descriptionShort: "Magia e sabor em Canela!",
        description: "A pizzaria mais enfeitiçada da Serra. Pizzas com massas artesanais e ingredientes selecionados.",
        currentPrice: "79,90",
        discount: 29,
        images: ["https://tcheofertas.s3.sa-east-1.amazonaws.com/upload/adm_uploads/WhatsApp_Image_2023-11-28_at_15.11.23_65662bb1e1708.jpeg"],
        rules: [],
        address: { street: "Centro", city: "Canela", state: "RS" },
        categories: ["gastro-serra", "pizzarias", "serra-gaucha"]
    },
    {
        id: "sel-3",
        idv: "sel-3",
        slug: "nasa-gramado",
        title: "GRAMADO | Uma Estação da NASA na Serra Gaúcha!",
        location: "Gramado",
        descriptionShort: "Conheça o espaço sem sair da Serra!",
        description: "Uma experiência imersiva com artefatos originais da NASA.",
        currentPrice: "89,90",
        images: ["https://tcheofertas.s3.sa-east-1.amazonaws.com/upload/adm_uploads/nasa_6504a37c0f160.png"],
        rules: [],
        address: { street: "Av. das Hortênsias", city: "Gramado", state: "RS" },
        categories: ["lazer-serra", "serra-gaucha", "dicas-sul-serra"]
    },
    {
        id: "sel-4",
        idv: "sel-4",
        slug: "guacamole-gramado",
        title: "Guacamole | Rodízio Mexicano à Vontade!",
        location: "Gramado",
        descriptionShort: "Fiesta mexicana!",
        description: "O melhor da comida mexicana com muita música e diversão.",
        currentPrice: "119,90",
        discount: 20,
        images: ["https://tcheofertas.s3.sa-east-1.amazonaws.com/upload/adm_uploads/guacamole_6504a3bb5604b.png"],
        rules: [],
        address: { street: "Rua Coberta", city: "Gramado", state: "RS" },
        categories: ["gastro-serra", "serra-gaucha"]
    },
    // Region Offers
    {
        id: "reg-2",
        idv: "reg-2",
        slug: "churrascaria-passoquinha",
        title: "Churrascaria Passoquinha | Rodízio de Carnes",
        location: "Canoas",
        descriptionShort: "Tradição em costela e gado!",
        description: "Rodízio completo com as melhores carnes e buffet variado.",
        currentPrice: "54,90",
        discount: 31,
        isExclusive: true,
        megaPromo: true,
        category: "CHURRASCO E GALETO",
        images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20221128095059-18.webp"],
        rules: [],
        address: { street: "BR 116", city: "Canoas", state: "RS" },
        categories: ["gastro-poa", "mega-promo"]
    },
    {
        id: "reg-3",
        idv: "reg-3",
        slug: "savanna-pizzaria",
        title: "Savanna Pizzaria | Rodízio de Pizzas Temático",
        location: "Porto Alegre",
        descriptionShort: "Aventura e sabor na Savanna!",
        description: "Pizzaria temática com ambiente de selva e pizzas deliciosas.",
        currentPrice: "74,90",
        discount: 31,
        isExclusive: true,
        megaPromo: true,
        category: "PIZZAS",
        images: ["https://tcheofertas.s3.sa-east-1.amazonaws.com/upload/adm_uploads/Savanna_Pizzaria_652701f2385ea.png"],
        rules: [],
        address: { street: "Zona Norte", city: "Porto Alegre", state: "RS" },
        categories: ["gastro-poa", "pizzarias", "mega-promo"]
    },
    {
        id: "reg-4",
        idv: "reg-4",
        slug: "cinesystem",
        title: "Cinesystem | Ingressos 2D",
        location: "São Leopoldo",
        descriptionShort: "Cinema com qualidade e conforto.",
        description: "Ingressos válidos para qualquer filme 2D em cartaz.",
        currentPrice: "14,50",
        discount: 47,
        category: "CINEMAS",
        images: ["https://tcheofertas.s3.sa-east-1.amazonaws.com/upload/adm_uploads/Cinesystem_6488d9283f3e8.png"],
        rules: ["Válido todos os dias"],
        address: { street: "Bourbon Shopping", city: "São Leopoldo", state: "RS" },
        categories: ["cinema", "lazer-poa"]
    },
    // Carousel Extras
    {
        id: "car-1",
        idv: "HB-desk-1-4",
        slug: "torre-cafe-colonial",
        title: "Torre Café Colonial | Delícias Típicas",
        location: "Gramado",
        descriptionShort: "O mais tradicional café colonial de Gramado.",
        description: "Mais de 80 variedades de delícias coloniais.",
        currentPrice: "119,00",
        images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/_15_10_7_9_15_7_6-20251211142015-6.webp"],
        rules: [],
        address: { street: "Av. das Hortênsias", city: "Gramado", state: "RS" },
        categories: ["gastro-serra", "cafe-colonial", "serra-gaucha"]
    },
    {
        id: "car-2",
        idv: "HB-desk-1-5",
        slug: "multiparque-sc",
        title: "Multiparque SC | Ingresso Parque Aquático",
        location: "Balneário Camboriú",
        descriptionShort: "Diversão em Balneário Camboriú.",
        description: "Parque aquático completo para a família.",
        currentPrice: "89,90",
        images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/_8_10_8-20260127162924-7.webp"],
        rules: [],
        address: { street: "Rodovia BR 101", city: "Balneário Camboriú", state: "SC" },
        categories: ["parques-aquaticos", "santa-catarina"]
    },
    {
        id: "car-3",
        idv: "HB-desk-1-6",
        slug: "restaurante-panorama",
        title: "Restaurante Panorama | Buffet de Pratos Quentes",
        location: "Gramado",
        descriptionShort: "Vista panorâmica e gastronomia de excelência.",
        description: "Buffet variado com vista para o Vale do Quilombo.",
        currentPrice: "69,90",
        images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/_13-20260127165921-8.webp"],
        rules: [],
        address: { street: "Rua Bela Vista", city: "Gramado", state: "RS" },
        categories: ["gastro-serra", "serra-gaucha"]
    },
    {
        id: "car-4",
        idv: "HB-desk-1-7",
        slug: "parque-do-caracol",
        title: "Parque do Caracol | Ingresso Mirante",
        location: "Canela",
        descriptionShort: "A mais bela cascata da Serra Gaúcha.",
        description: "Contemple a Cascata do Caracol do mirante principal.",
        currentPrice: "35,00",
        images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/_10_10-20260127154710-9.webp"],
        rules: [],
        address: { street: "Estrada do Caracol", city: "Canela", state: "RS" },
        categories: ["lazer-serra", "serra-gaucha"]
    },
    {
        id: "car-5",
        idv: "HB-desk-1-8",
        slug: "chateau-piatto",
        title: "Chateau Piatto | Sequência de Fondue",
        location: "Gramado",
        descriptionShort: "Fondue premium em Gramado.",
        description: "Sequência completa de queijo, carne e chocolate.",
        currentPrice: "89,90",
        images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/_9_5-20251217135436-2.webp"],
        rules: [],
        address: { street: "Rua Coberta", city: "Gramado", state: "RS" },
        categories: ["fondues", "gastro-serra", "serra-gaucha"]
    }
];

export function getProductBySlug(slug: string): Product | undefined {
    return PRODUCTS.find(p => p.slug === slug);
}
