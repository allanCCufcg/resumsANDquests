let currentTab = 'resumos';
let editingIndex = -1;
let data = {
    resumos: [
    {
    title: "MODELO",
    content: "NOME COMPLETO: \nCPF: \nDATA DA OCORRÊNCIA: \nTRECHO DA OCORRÊNCIA: \nVOO: \nE-TICKET: \nRESERVA/LOCALIZADOR: \nNº DA COMPRA: \nRIB: N/I\n_____________________________________________________\nRESUMO DO CASO\n\n_____________________________________________________\nQUESTIONAMENTOS\n\n_____________________________________________________"
    },
    {
    title: "VOO ATRASADO",
    content: "A parte autora relata que foi impactada por atraso de voo em sua viagem, ocasionando vários transtornos."
    },
    {
    title: "ATRASO + PERDA",
    content: "A parte autora relata que seu voo sofreu atraso, e consequentemente houve perda de conexão, ocasionando vários transtornos. A realocação resultou em grande atraso na chegada prevista ao destino."
    },
    {
    title: "CANCELADO",
    content: "A parte autora relata que, durante a sua viagem foi impactada por cancelamento de voo, sendo necessário a realocação, ocasionando diversos transtornos."
    },
    {
    title: "CANCELADO PANDEMIA + REEMBOLSO",
    content: "A parte autora relata que adquiriu passagens para a viagem programada. Contudo, informa que seu voo fora cancelado em razão da pandemia, assim requereu a restituição dos valores pagos. Contudo, informa que até a presente data não recebeu a restituição."
    },
    {
    title: "BAGAGEM EXTRAVIADA + ATRASO DE VOO",
    content: "A parte autora informa que seu voo sofreu atraso, bem como, chegando ao seu destino, notou que suas bagagens foram extraviadas."
    },
    {
    title: "REEMBOLSO",
    content: "A parte autora adquiriu passagens aéreas para uma programada viagem, porém por motivos pessoais precisou cancelar a viagem e requereu a restituição dos valores pagos. Contudo, informa que até a presente data não recebeu a restituição."
    },
    {
    title: "OVERBOOKING",
    content: "A parte autora relata que foi impactada por preterição de embarque, sendo necessário à alteração do voo inicialmente previsto. Informa que ocorreu a prática de Overbooking para o voo, ocasionando diversos transtornos."
    },
    {
    title: "BAGAGEM - AVARIA",
    content: "A parte autora relata que, chegando ao seu destino, notou que sua bagagem foi danificada, ocasionando diversos transtornos."
    },
    {
    title: "BAGAGEM - EXTRAVIADA",
    content: "A parte autora relata que chegando ao seu destino, notou que sua bagagem foi extraviada, ocasionando diversos transtornos."
    },
    {
    title: "TRIPULAÇÃO",
    content: "A parte autora relata que não obteve o tratamento profissional esperado por parte da tripulação. Destaca falhas no atendimento da Ré, ocasionando transtornos. (Relatar cada situação individualmente)"
    },
    {
    title: "ALTERAÇÃO DE VOO",
    content: "A parte autora relata que houve a alteração do voo inicialmente prevista, ocasionando diversos transtornos. Diante da situação, requer indenização por danos morais."
    },
    {
    title: "LUBBER (Não cadastrar, chamar supervisão no privado para conferência)",
    content: "O autor faz parte do programa de milhagem vinculados à todas as rés que constam na PI, entretanto ingressa com uma ação ordinária para discutir e derrubar a cláusula que somente permite que sejam emitidas passagens aéreas para 25 CPFs distintos. Diante da narrativa requer tutela de urgência para que a cláusula seja anulada."
    },
    {
    title: "ANIMAIS",
    content: "A parte autora relata que adquiriu passagens para a viagem programada, onde deseja levar consigo um animal de estimação. Por isso, requer em tutela de urgência que a Ré seja compelida a providenciar o embarque animal em cabine de passageiros para a viagem da autora, considerando ser animal de suporte emocional da tutora."
    },
    {
    title: "FRAUDE EM LATAM PASS",
    content: "A parte autora relata que identificou movimentação não reconhecida em conta Latam Pass, onde houve emissão de bilhete aéreo utilizando pontuação (milhas). O autor relata a ocorrência de fraude. Por isso, requer restituição da pontuação."
    },
    {
    title: "ASSENTO CONFORTO",
    content: "A parte autora relata que adquiriu passagens para a viagem programada, pagando pelo adicional do assento conforto. Contudo, informa que fora realocado para um assento comum, ocasionando vários transtornos."
    },
    {
    title: "CARGAS",
    content: "A parte autora relata que adquiriu o serviço de cargas. Contudo, informa que houve extravio, ocasionando vários transtornos. (Relatar cada situação individualmente)."
    },
    {
    title: "SEGURADORA",
    content: "A parte autora é seguradora e os passageiros segurados entram em contato em casos de atraso, cancelamento e/ou extravio. No caso em comento, ao final do destino ocorreu o extravio de bagagens. Ante a ocorrência dos sinistros a autora suportou um prejuízo total de R$ xxxxx. Por isso, a Ré fora acionada judicialmente."
    },
    {
    title: "REFEIÇÃO ESPECIAL",
    content: "A parte autora relata que adquiriu passagens para a viagem programada. Por questões religiosas, solicitou antecipadamente refeição especial Koscher. A refeição não foi fornecida durante todo o voo, ocasionando vários transtornos."
    }
    ],
    
    pi400   : [
    {
    title: "Atraso",
    dependent: "AEROPORTO",
    content: "1) Houve atraso no voo?\n2) Qual o motivo?\n3) De quanto tempo foi o atraso na decolagem e de quanto tempo no pouso?\n4) Foram entregues as assistências ao pax? Quais?\n5) Em caso de perda de conexão, em qual voo o pax foi realocado?\n6) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela LATAM?\n7) Houve contato com o FALE ou consumidor.gov? Quais as tratativas?\n8) O bilhete foi adquirido por agência? Qual?\n9) Qual empresa o voo pertence? JJ ou LA?\n10)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Cancelamento",
    dependent: "AEROPORTO",
    content: "1) Houve o cancelamento de voo?\n2) Qual o motivo?\n3) Em qual voo o pax foi realocado?\n4) Foram entregues as assistências ao pax?\n5) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela LATAM?\n6) Houve contato com o FALE ou consumidor.gov? Quais as tratativas?\n7) O bilhete foi adquirido por agência? Qual?\n8) Qual empresa o voo pertence? JJ ou LA?\n9)Anexar tela que comprove o nome de todos os passageiros que constam na reserva."
    },
    {
    title: "Overbooking",
    dependent: "AEROPORTO",
    content: "1) Houve a ocorrência de overbooking no voo em questão?\n2) Caso positivo, em qual voo o pax foi reacomodado?\n3) Foram entregues as assistências ao pax? Quais? Anexar comprovante\n4) Houve pagamento do DES? Qual o valor? Anexar comprovante\n5) O overbooking foi voluntário ou involuntário?\n6) Caso não tenha ocorrido o overbooking, qual o motivo do não embarque do pax?\n7) Houve contato com o FALE ou consumidor.gov? Quais as tratativas? Anexar no LB\n8) O bilhete foi adquirido por agência? Qual?\n9) Qual empresa o voo pertence? JJ ou LA?\n10) Por gentileza anexar todos os pax que constam na reserva"
    },
    {
    title: "Alteração",
    dependent: "AEROPORTO",
    content: "1) Houve a ocorrência no voo em questão?\n2) Qual o motivo?\n3) Pax foi notificado com antecedência?\n4) Foram entregues as assistências ao pax?\n5) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela LATAM?\n6) Houve contato com o FALE ou consumidor.gov? Quais as tratativas?\n7) O bilhete foi adquirido por agência? Qual?\n8) Qual empresa o voo pertence? JJ ou LA?\n9)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bilhete/Reserva - Inexistente no sistema",
    dependent: "BILHETE/RESERVA",
    content: "1) O pax foi impedido de embarcar?\n2) Qual o motivo do impedimento?\n3) As passagens estavam confirmadas?\n4) A compra foi efetivada?\n5) Qual a solução pela empresa?\n6) A companhia realocou o pax com ou sem custos? Para qual data, horário e voo?\n7) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela LATAM?\n8) Houve contato com o FALE ou consumidor.gov? Quais as tratativas?\n9) O bilhete foi adquirido por agência? Qual?\n10) Qual empresa o voo pertence? JJ ou LA?\n11)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bilhete/Reserva - Erro na emissão",
    dependent: "BILHETE/RESERVA",
    content: "1) O pax foi impedido de embarcar?\n2) Qual o motivo do impedimento?\n3) Qual foi o erro que impediu o embarque?\n4) Qual a solução da empresa?\n5) A companhia realocou o pax com ou sem custos? Para qual data, horário e voo?\n6) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela LATAM?\n7) Houve contato com o FALE ou consumidor.gov? Quais as tratativas?\n8) O bilhete foi adquirido por agência? Qual?\n9) Qual empresa o voo pertence? JJ ou LA?\n10)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bilhete/Reserva - Remarcação/Diferença Tarifária",
    dependent: "BILHETE/RESERVA",
    content: "1) Em qual tarifa o autor adquiriu a passagem, bem como suas regras tarifárias?\n2) Houve o reembolso de algum valor? Caso positivo, anexar o comprovante\n3) Qual o valor cobrado para remarcação da passagem?\n4) Houve contato com o FALE ou consumidor.gov? Quais as tratativas?\n5) O bilhete foi adquirido por agência? Qual?\n6) Qual empresa o voo pertence? JJ ou LA?\n7)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Perda de Voo/No show",
    dependent: "AEROPORTO",
    content: "1) O pax foi impedido de embarcar?\n2) Qual o motivo do impedimento?\n3) Qual foi o erro que impediu o embarque?\n4) Qual a solução da empresa?\n5) A companhia realocou o pax com ou sem custos? Para qual data, horário e voo?\n6) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela LATAM?\n7) Houve contato com o FALE ou consumidor.gov? Quais as tratativas?\n8) O bilhete foi adquirido por agência? Qual?\n9) Qual empresa o voo pertence? JJ ou LA?\n10)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bagagem - Extravio Temporário",
    dependent: "AEROPORTO",
    content: "1) A ocorrência alegada pelo pax foi confirmada?\n2) Quanto tempo a bagagem ficou extraviada?\n3) Anexar comprovante de entrega de bagagem\n4) Foi realizado algum pagamento à título de indenização? Qual valor? Anexar comprovante\n5) Houve contato com o FALE ou consumidor.gov? Quais as tratativas?\n6) O bilhete foi adquirido por agência? Qual?\n7) Qual empresa o voo pertence? JJ ou LA?\n8)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bagagem - Extravio Definitivo",
    dependent: "AEROPORTO",
    content: "1) A ocorrência alegada pelo pax foi confirmada?\n2) Quais foram as tratativas?\n3) Foi realizado algum pagamento à título de indenização? Qual valor? Anexar comprovante\n4) Houve contato com o FALE ou consumidor.gov? Quais as tratativas?\n5) O bilhete foi adquirido por agência? Qual?\n6) Qual empresa o voo pertence? JJ ou LA?\n7)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bagagem - Violação",
    dependent: "AEROPORTO",
    dependent: "AEROPORTO",
    content: "1) A ocorrência alegada pelo pax foi confirmada?\n2) Quais as tratativas realizadas pela LATAM?\n3) Foi realizado algum pagamento à título de indenização? Qual valor? Anexar comprovante\n4) Houve contato com o FALE ou consumiodr.gov? Quais as tratativas?\n5) O bilhete foi adquirido por agência? Qual?\n6) Qual empresa o voo pertence? JJ ou LA?\n7)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bagagem - Avaria",
    dependent: "AEROPORTO",
    content: "1) A ocorrência alegada pelo pax foi confirmada?\n2) Quais as tratativas realizadas pela LATAM?\n3) Houve o conserto da bagagem? Foi realizada a entrega? Anexar recibo\n4) Houve contato com o FALE ou consumidor.gov? Quais as tratativas?\n5) O bilhete foi adquirido por agência? Qual?\n6) Qual empresa o voo pertence? JJ ou LA?\n7)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Reembolso",
    dependent: "EQUIPE RECEITA - REEMBOLSO",
    content: "1) Foi solicitado o cancelamento e reembolso dos bilhetes?\n2) Qual o valor reembolsado?\n3) Qual o perfil tarifário da passagem?\n4) Qual o valor descontado referente a multa?\n5) Anexar comprovante de reembolso ao sistema.\n6) Houve contato com o FALE ou consumidor.gov? Quais as tratativas?\n7) O bilhete foi adquirido por agência? Qual?\n8) Qual empresa o voo pertence? JJ ou LA?\n9)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Cobrança Indevida",
    dependent: "EQUIPE RECEITA - FRAUDE",
    content: "1) A primeira compra da autora foi efetivada?\n2) A origem e destino das reservas são os mesmos?\n3) Os passageiros são os mesmos?\n4) Alguma das reservas foi cancelada?\n5) Possuímos documentos que comprovem? Anexar\n6) Houve contato com o FALE ou consumidor.gov? Quais as tratativas?\n7) O bilhete foi adquirido por agência? Qual?\n8) Qual empresa o voo pertence? JJ ou LA?\n9)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Tripulação de cabine",
    dependent: "TRIPULAÇÃO DE CABINE",
    content: "1-) Qual o relato da tripulação acerca do ocorrido no voo em questão?\n2-) De fato o assento da autora foi alterado? Possuímos algum documento que comprove essa alteração? De fato o assento e o multimídia estavam danificados?\n3-) Qual o procedimento para amenizar os danos sofridos a parte?\n4-) Anexar documento que comprove o ocorrido ao sistema.\n5-)Anexar tela que comprove o nome de todos os passageiros que constam na reserva\n\n(Neste, as perguntas podem variar com relação ao relato ocorrido dentro da aeronave)"
    },
    {
    title: "TAM VIAGENS",
    dependent: "TAM VIAGENS",
    content: "1) A compra do referido pacote foi feita através de agência de viagem?\n2) Se sim, qual? Devemos representá-la?\n3) Teria alguma possibilidade de acordo no referido caso?\n4) Possuímos documentos que comprovem que o Pax possuía total ciência do quarto alugado?\n5) Possuímos algum relato do ocorrido?\n6) Houve solicitação de reembolso?\n7) Pax faz jus ao reembolso integral do valor?\n8)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "PI HURB",
    dependent: "AEROPORTO",
    content: "1-A) A reserva foi cancelada a pedido da HURB? Caso positivo, anexar o e-mail comprovando o pedido\n1-B) A reserva está ativa no sistema? Caso negativo, quando foi cancelada e por qual motivo?\n2) Qual foi a data que a HURB realizou a compra das passagens aéreas junto à LATAM?\n3) Houve algum contato das autoras diretamente com a LATAM? Quais as tratativas e anexar as cópias no LB.\n4) Há como cumprir essa oferta de manutenção do voo às autoras?\n5) Os voos aconteceram normalmente?\n6) Houve emissão dos bilhetes da reserva? Se houve e, posteriormente foram cancelados, houve algum pedido expresso da HURB para tanto? Anexar evidências.\n7)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "PONTOS - FRAUDE",
    dependent: "MULTIPLUS - INCORPORAÇÃO",
    content: "1) Houve reclamação do cliente acerca da ocorrência de fraude?\n2) Quais resgates foram contestados?\n3) A conta Latam Pass se encontra bloqueada?\n4) Houve análise do setor anti-fraude?\n5) A fraude foi considerada improcedente ou procedente?\n6) Favor juntar o histórico de tratativa\n7)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "PONTOS - 25 CPFS",
    dependent: "MULTIPLUS - INCORPORAÇÃO",
    content: "1) A conta Latam Pass se encontra bloqueada ou ativa\n2) Se bloqueada, desde qual data\n3) Quantas passagens para terceiros foi emitida no período\n4) O histórico recente de emissões\n5) Se o cliente foi comunicado acerca do bloqueio\n6) O aceite aos termos/alteração do regulamento\n7)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "IMPEDIMENTO DE EMBARQUE",
    dependent: "AEROPORTO",
    content: "1) O pax foi impedido de embarcar?\n2) Qual o motivo?\n3) Caso o pax tenha sido realocado, em qual data, horário e voo?\n4) Essa realocação foi com ou sem custos?\n5) Caso não tenha tido impedimento, o que realmente ocorreu?\n6) Houve tratativas com o Fale ou consumidor.gov? Anexar\n7) O voo era JJ ou LA?\n8)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "PONTOS - RESGATE",
    dependent: "MULTIPLUS - INCORPORAÇÃO",
    content: "1) Qual a data do primeiro contato do autor com a LATAM?\n2) Houve demora para resgate dos pontos e troca por passagem aérea?\n3) Caso positivo, qual o motivo?\n4) Quais as tratativas para a solução da questão?\n5)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "REDUÇÃO DE LIMITE - CARTÃO DE CRÉDITO",
    dependent: "MULTIPLUS - INCORPORAÇÃO",
    content: "1) Houve problemas com a liberação do limite do autor?\n2) Qual o limite atual?\n3) Houve contato do pax acerca do relatado?\nQual a solução dada pela empresa?\n4)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "ASSENTO",
    dependent: "AEROPORTO",
    content: "1) Há relato de alteração de assentos da família?\n2) De fato eles viajaram separados?\n3) O pax entrou em contato com a LATAM? caso positivo, qual a solução?\n4)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "PROBLEMA DENTRO DO AVIÃO",
    dependent: "TRIPULAÇÃO DE CABINE",
    content: "1) Houve a ocorrência no voo em questão?\n2) Qual o motivo?\n3) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela LATAM?\n4) Foi entregue assistência?\n5) Houve contato com o FALE? Quais as tratativas?\n6) Qual empresa o voo pertence? JJ ou LA\n7) Houve contato através do consumidor.gov? Quais as tratativas?\n8)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "EXCESSO DE BAGAGEM",
    dependent: "EQUIPE RESERVA SAORO",
    content: "1) Qual o procedimento acerca da bagagem paga com antecedência?\n2) É valido o pagamento de excesso de bagagem anterior ao voo ou pagamento da bagagem despachada acrescido no valor da passagem?\n3) Possuímos documentos?\n4) Qual empresa o voo pertence? JJ ou LA\n5) Houve contato através do consumidor.gov? Quais as tratativas? O bilhete foi adquirido por agência ? Qual ?\n6)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "MAU ATENDIMENTO",
    dependent: "FALE COM A GENTE",
    content: "1) Qual o relato dos funcionários sobre o ocorrido ?\n2) De fato houve mal atendimento ?\n3) Qual o procedimento para amenizar os danos sofridos a parte ?\n4) O pax recebeu o serviço contratado?\n5) Possuímos documentos referente ao ocorrido? Por gentileza anexar\n6) Houve contato com o FALE? Quais as tratativas? 7) Qual empresa o voo pertence? JJ ou LA 8) Houve contato através do consumidor.gov? Quais as tratativas? O bilhete foi adquirido por agência ? Qual ?\n8)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "BAGAGEM PAGA",
    dependent: "SAORO",
    content: "1)Qual o procedimento acerca da bagagem paga com antecedência?\n2) É valido o pagamento de excesso de bagagem anterior ao voo ou pagamento da bagagem despachada acrescido no valor da passagem?\n3) Possuímos documentos?\n4) Qual empresa o voo pertence? JJ ou LA\n5) Houve contato através do consumidor.gov? Quais as tratativas? O bilhete foi adquirido por agência ? Qual ?\n6)Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "PROPAGANDA ENGANOSA",
    dependent: "FALE COM A GENTE",
    content: "1) O pax foi impedido de finalizar sua compra? Por qual motivo?\n2) Houve erro no site?\n3) Houve contato com o FALE? Quais as tratativas? 4) Houve contato através do consumidor.gov ? Quais as tratativas?\n5) Temos documentos que comprovem o ocorrido? Por gentileza anexar."
    },
    {
    title: "PONTOS - BONIFICAÇÃO",
    dependent: "MULTIPLUS - INCORPORAÇÃO",
    content: "1) O pax tem direito à bonificação por uso do cartão LATAM PASS?\n2) Como funciona o serviço? Quais as regras para a bonificação através do uso do cartão LATAM PASS?\n3) O pax entrou em contato para relatar o ocorrido?\n4) Qual foi a solução dada pela empresa?\n5) Há cadastro ativo em nome do pax? Qual o total de pontos acumulados?"
    },
    {
    title: "PONTOS - CATEGORIA BLACK",
    dependent: "MULTIPLUS - INCORPORAÇÃO",
    content: "1) O pax possui conta na LATAM PASS? 2) Qual o status da conta? 3) O pax possui categoria elite no programa LATAM PASS BLACK SIGNATURE? 4) Como funciona o serviço? Quais as regras para a categoria? 5) O pax entrou em contato para relatar o ocorrido? 6) Qual foi a solução dada pela empresa? (DIRECIONAR AO SETOR PROGRAMA FIDELIDADE)"
    }
    ],

    pi400Voepass : [
    {
    title: "Atraso",
    dependent: "VOEPASS",
    content: "1) Houve atraso no voo?\n2) Qual o motivo?\n3) De quanto tempo foi o atraso na decolagem e de quanto tempo no pouso?\n4) Foram entregues as assistências ao pax? Quais?\n5) Em caso de perda de conexão, em qual voo o pax foi realocado?\n6) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela LATAM?\n7) Houve contato com o SAC INTERNO ou consumidor.gov ?\n8) O bilhete foi adquirido por agência? Qual?\n9) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },

    {
    title: "Cancelamento",
    dependent: "VOEPASS",
    content: "1) Houve o cancelamento de voo?\n2) Qual o motivo?\n3) Em qual voo o pax foi realocado?\n4) Foram entregues as assistências ao pax?\n5) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela LATAM?\n6) Houve contato com o SAC INTERNO ou consumidor.gov ?\n7) O bilhete foi adquirido por agência? Qual?\n8) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Overbooking",
    dependent: "VOEPASS",
    content: "1) Houve a ocorrência de overbooking no voo em questão?\n2) Caso positivo, em qual voo o pax foi reacomodado?\n3) Foram entregues as assistências ao pax? Quais? Anexar comprovante\n4) Houve pagamento do DES? Qual o valor? Anexar comprovante\n5) O overbooking foi voluntário ou involuntário?\n6) Caso não tenha ocorrido o overbooking, qual o motivo do não embarque do pax?\n7) Houve contato com o SAC INTERNO ou consumidor.gov ? Anexar no LB\n8) O bilhete foi adquirido por agência? Qual?\n9) Por gentileza anexar todos os pax que constam na reserva"
    },
    {
    title: "Alteração",
    dependent: "VOEPASS",
    content: "1) Houve a ocorrência no voo em questão?\n2) Qual o motivo?\n3) Pax foi notificado com antecedência?\n4) Foram entregues as assistências ao pax?\n5) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela LATAM?\n6) Houve contato com o SAC INTERNO ou consumidor.gov ?\n7) O bilhete foi adquirido por agência? Qual?\n8) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bilhete/Reserva - Inexistente no sistema",
    dependent: "VOEPASS",
    content: "1) O pax foi impedido de embarcar?\n2) Qual o motivo do impedimento?\n3) As passagens estavam confirmadas?\n4) A compra foi efetivada?\n5) Qual a solução pela empresa?\n6) A companhia realocou o pax com ou sem custos? Para qual data, horário e voo?\n7) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela LATAM?\n8) Houve contato com o SAC INTERNO ou consumidor.gov ?\n9) O bilhete foi adquirido por agência? Qual?\n10) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bilhete/Reserva - Erro na emissão",
    dependent: "VOEPASS",
    content: "1) O pax foi impedido de embarcar?\n2) Qual o motivo do impedimento?\n3) Qual foi o erro que impediu o embarque?\n4) Qual a solução da empresa?\n5) A companhia realocou o pax com ou sem custos? Para qual data, horário e voo?\n6) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela LATAM?\n7) Houve contato com o SAC INTERNO ou consumidor.gov ?\n8) O bilhete foi adquirido por agência? Qual?\n9) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bilhete/Reserva - Remarcação/Diferença Tarifária",
    dependent: "VOEPASS",
    content: "1) Em qual tarifa o autor adquiriu a passagem, bem como suas regras tarifárias?\n2) Houve o reembolso de algum valor? Caso positivo, anexar o comprovante\n3) Qual o valor cobrado para remarcação da passagem?\n4) Houve contato com o SAC INTERNO ou consumidor.gov ?\n5) O bilhete foi adquirido por agência? Qual?\n6) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Perda de Voo/No show",
    dependent: "VOEPASS",
    content: "1) O pax foi impedido de embarcar?\n2) Qual o motivo do impedimento?\n3) Qual foi o erro que impediu o embarque?\n4) Qual a solução da empresa?\n5) A companhia realocou o pax com ou sem custos? Para qual data, horário e voo?\n6) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela LATAM?\n7) Houve contato com o SAC INTERNO ou consumidor.gov ?\n8) O bilhete foi adquirido por agência? Qual?\n9) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bagagem - Extravio Temporário",
    dependent: "VOEPASS",
    content: "1) A ocorrência alegada pelo pax foi confirmada?\n2) Quanto tempo a bagagem ficou extraviada?\n3) Anexar comprovante de entrega de bagagem\n4) Foi realizado algum pagamento à título de indenização? Qual valor? Anexar comprovante\n5) Houve contato com o SAC INTERNO ou consumidor.gov ?\n6) O bilhete foi adquirido por agência? Qual?\n7) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bagagem - Extravio Definitivo",
    dependent: "VOEPASS",
    content: "1) A ocorrência alegada pelo pax foi confirmada?\n2) Quais foram as tratativas?\n3) Foi realizado algum pagamento à título de indenização? Qual valor? Anexar comprovante\n4) Houve contato com o SAC INTERNO ou consumidor.gov ?\n5) O bilhete foi adquirido por agência? Qual?\n6) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bagagem - Violação",
    dependent: "VOEPASS",
    content: "1) A ocorrência alegada pelo pax foi confirmada?\n2) Quais as tratativas realizadas pela LATAM?\n3) Foi realizado algum pagamento à título de indenização? Qual valor? Anexar comprovante\n4) Houve contato com o FALE ou consumiodr.gov? Quais as tratativas?\n5) O bilhete foi adquirido por agência? Qual?\n6) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Bagagem - Avaria",
    dependent: "VOEPASS",
    content: "1) 1) A ocorrência alegada pelo pax foi confirmada?\n2) Quais as tratativas realizadas pela LATAM?\n3) Houve o conserto da bagagem? Foi realizada a entrega? Anexar recibo\n4) Houve contato com o SAC INTERNO ou consumidor.gov ?\n5) O bilhete foi adquirido por agência? Qual?\n6) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Reembolso",
    dependent: "VOEPASS",
    content: "1) Foi solicitado o cancelamento e reembolso dos bilhetes?\n2) Qual o valor reembolsado?\n3) Qual o perfil tarifário da passagem?\n4) Qual o valor descontado referente a multa?\n5) Anexar comprovante de reembolso ao sistema.\n6) Houve contato com o SAC INTERNO ou consumidor.gov ?\n7) O bilhete foi adquirido por agência? Qual?\n8) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Cobrança Indevida",
    dependent: "VOEPASS",
    content: "1) A primeira compra da autora foi efetivada?\n2) A origem e destino das reservas são os mesmos?\n3) Os passageiros são os mesmos?\n4) Alguma das reservas foi cancelada?\n5) Possuímos documentos que comprovem? Anexar\n6) Houve contato com o SAC INTERNO ou consumidor.gov ?\n7) O bilhete foi adquirido por agência? Qual?\n8) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "Tripulação de cabine",
    dependent: "VOEPASS",
    content: "1-) Qual o relato da tripulação acerca do ocorrido no voo em questão?\n2-) De fato o assento da autora foi alterado? Possuímos algum documento que comprove essa alteração? De fato o assento e o multimídia estavam danificados?\n3-) Qual o procedimento para amenizar os danos sofridos a parte?\n4-) Anexar documento que comprove o ocorrido ao sistema.\n5-) Anexar tela que comprove o nome de todos os passageiros que constam na reserva\n(Neste, as perguntas podem variar com relação ao relato ocorrido dentro da aeronave)"
    },
    {
    title: "TAM VIAGENS",
    dependent: "VOEPASS",
    content: "1) A compra do referido pacote foi feita através de agência de viagem?\n2) Se sim, qual? Devemos representá-la?\n3) Teria alguma possibilidade de acordo no referido caso?\n4) Possuímos documentos que comprovem que o Pax possuía total ciência do quarto alugado?\n5) Possuímos algum relato do ocorrido?\n6) Houve solicitação de reembolso?\n7) Pax faz jus ao reembolso integral do valor?\n8) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "PI HURB",
    dependent: "VOEPASS",
    content: "1-A) A reserva foi cancelada a pedido da HURB? Caso positivo, anexar o e-mail comprovando o pedido\n1-B) A reserva está ativa no sistema? Caso negativo, quando foi cancelada e por qual motivo?\n2) Qual foi a data que a HURB realizou a compra das passagens aéreas junto à LATAM?\n3) Houve algum contato das autoras diretamente com a LATAM? Quais as tratativas e anexar as cópias no LB.\n4) Há como cumprir essa oferta de manutenção do voo às autoras?\n5) Os voos aconteceram normalmente?\n6) Houve emissão dos bilhetes da reserva? Se houve e, posteriormente foram cancelados, houve algum pedido expresso da HURB para tanto? Anexar evidências.\n7) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "PONTOS - FRAUDE",
    dependent: "VOEPASS",
    content: "1) Houve reclamação do cliente acerca da ocorrência de fraude?\n2) Quais resgates foram contestados?\n3) A conta Latam Pass se encontra bloqueada?\n4) Houve análise do setor anti-fraude?\n5) A fraude foi considerada improcedente ou procedente?\n6) Favor juntar o histórico de tratativa\n7) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "PONTOS - 25 CPFS",
    dependent: "VOEPASS",
    content: "1) A conta Latam Pass se encontra bloqueada ou ativa\n2) Se bloqueada, desde qual data\n3) Quantas passagens para terceiros foi emitida no período\n4) O histórico recente de emissões\n5) Se o cliente foi comunicado acerca do bloqueio\n6) O aceite aos termos/alteração do regulamento\n7) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "IMPEDIMENTO DE EMBARQUE",
    dependent: "VOEPASS",
    content: "1) O pax foi impedido de embarcar?\n2) Qual o motivo?\n3) Caso o pax tenha sido realocado, em qual data, horário e voo?\n4) Essa realocação foi com ou sem custos?\n5) Caso não tenha tido impedimento, o que realmente ocorreu?\n6) Houve tratativas com o Fale ou consumidor.gov? Anexar\n7) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "PONTOS - RESGATE",
    dependent: "VOEPASS",
    content: "1) Qual a data do primeiro contato do autor com a LATAM?\n2) Houve demora para resgate dos pontos e troca por passagem aérea?\n3) Caso positivo, qual o motivo?\n4) Quais as tratativas para a solução da questão?\n5) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "REDUÇÃO DE LIMITE - CARTÃO DE CRÉDITO",
    dependent: "VOEPASS",
    content: "1) Houve problemas com a liberação do limite do autor?\n2) Qual o limite atual?\n3) Houve contato do pax acerca do relatado? Qual a solução dada pela empresa?\n4) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "ASSENTO",
    dependent: "VOEPASS",
    content: "1) Há relato de alteração de assentos da família?\n2) De fato eles viajaram separados?\n3) O pax entrou em contato com a LATAM? caso positivo, qual a solução?\n4) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "PROBLEMA DENTRO DO AVIÃO",
    dependent: "VOEPASS",
    content: "1) Houve a ocorrência no voo em questão?\n2) Qual o motivo?\n3) Caso a ocorrência não seja confirmada, o que de fato ocorreu e quais as providências adotadas pela VOEPASS?\n4) Foi entregue assistência?\n5) Houve contato com o FALE? Quais as tratativas?\n6) Houve contato através do consumidor.gov? Quais as tratativas?\n8) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "EXCESSO DE BAGAGEM",
    dependent: "VOEPASS",
    content: "1) Qual o procedimento acerca da bagagem paga com antecedência?\n2) É valido o pagamento de excesso de bagagem anterior ao voo ou pagamento da bagagem despachada acrescido no valor da passagem?\n3) Possuímos documentos?\n4) Houve contato através do consumidor.gov? Quais as tratativas? O bilhete foi adquirido por agência ? Qual ?\n6) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "MAU ATENDIMENTO",
    dependent: "VOEPASS",
    content: "1) Qual o relato dos funcionários sobre o ocorrido?\n2) De fato houve mal atendimento?\n3) Qual o procedimento para amenizar os danos sofridos a parte?\n4) O pax recebeu o serviço contratado?\n5) Possuímos documentos referente ao ocorrido? Por gentileza anexar\n6) Houve contato com o FALE? Quais as tratativas?\n7) Houve contato através do consumidor.gov? Quais as tratativas? O bilhete foi adquirido por agência ? Qual ?\n8) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "BAGAGEM PAGA",
    dependent: "VOEPASS",
    content: "1) Qual o procedimento acerca da bagagem paga com antecedência?\n2) É valido o pagamento de excesso de bagagem anterior ao voo ou pagamento da bagagem despachada acrescido no valor da passagem?\n3) Possuímos documentos?\n4) Houve contato através do consumidor.gov? Quais as tratativas? O bilhete foi adquirido por agência ? Qual ?\n6) Anexar tela que comprove o nome de todos os passageiros que constam na reserva"
    },
    {
    title: "PROPAGANDA ENGANOSA",
    dependent: "VOEPASS",
    content: "1) O pax foi impedido de finalizar sua compra? Por qual motivo?\n2) Houve erro no site?\n3) Houve contato com o FALE? Quais as tratativas?\n4) Houve contato através do consumidor.gov ? Quais as tratativas?\n5) Temos documentos que comprovem o ocorrido? Por gentileza anexar"
    },
    {
    title: "PONTOS - BONIFICAÇÃO",
    dependent: "VOEPASS",
    content: "1) O pax tem direito à bonificação por uso do cartão LATAM PASS?\n2) Como funciona o serviço? Quais as regras para a bonificação através do uso do cartão LATAM PASS?\n3) O pax entrou em contato para relatar o ocorrido?\n4) Qual foi a solução dada pela empresa?\n5) Há cadastro ativo em nome do pax? Qual o total de pontos acumulados?"
    },
    {
    title: "PONTOS - CATEGORIA BLACK",
    dependent: "VOEPASS",
    content: "1) O pax possui conta na LATAM PASS?\n2) Qual o status da conta?\n3) O pax possui categoria elite no programa LATAM PASS BLACK SIGNATURE?\n4) Como funciona o serviço? Quais as regras para a categoria?\n5) O pax entrou em contato para relatar o ocorrido?\n6) Qual foi a solução dada pela empresa? (DIRECIONAR AO SETOR PROGRAMA FIDELIDADE)"
    }
    ],
    
    pi100 : [
    {
    title: "Alteração de voo",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Houve alteração do voo (indicar o numero do voo que foi alterado)? Por qual o motivo? Favor anexar documentos no sistema.\n2) Houve alteração comercial do voo (indicar o voo na pergunta)?\n3) O pax foi avisado com antecedência? Caso positivo, o pax concordou com a alteração?\n4) Foi fornecida assistência ao passageiro? Se sim, quais?\n5) Caso tenha sido fornecida assistência, houve acomodação do pax em hotel? Se sim, indicar o nome do hotel, endereço ou qualquer informação para que possamos verificar a qualidade do hotel\n6) Favor anexar todos os documentos no sistema\n7) Houve contato com o FALE? Quais as tratativas?\n8) Anexar tela que comprove o nome de todos os passageiros que constam na reserva."
    },
    {
    title: "Alteração de rota",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Houve alteração de rota do voo (indicar o numero do voo na pergunta), com pouso em aeroporto diverso do contratado? Por qual motivo? Favor anexar os documentos no sistema.\n2) O pax foi avisado no momento em que foi tomada a decisão da alteração?\n3) O pax foi realocado em voo/ônibus para o local contratado? Favor a data e, se voo, o novo voo.\n4) Foi fornecida assistência ao passageiro? Se sim, quais?\n5) Caso tenha sido fornecida assistência, houve acomodação do pax em hotel? Se sim, indicar o nome do hotel, endereço ou qualquer informação para que possamos verificar a qualidade do hotel.\n6) Favor anexar todos os documentos no sistema.\n7) Houve contato com o FALE? Quais as tratativas?\n8) Anexar tela que comprove o nome de todos os passageiros que constam na reserva."
    },
    {
    title: "Atraso de voo",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Houve atraso no voo (indicar o numero do voo ou voos afetados na pergunta)? Por qual motivo? De quanto tempo foi o atraso? Favor anexar os documentos no sistema.\n2) Foi fornecida assistência ao passageiro? Caso positivo, quais assistências foram fornecidas? Favor anexar os documentos no sistema. **Se houver perda de conexão**\n3) Houve perda de conexão em razão do atraso?\n4) Foi fornecida assistência ao passageiro? Se sim, quais?\n5) Caso tenha sido fornecida assistência, houve acomodação do pax em hotel? Se sim, indicar o nome do hotel, endereço ou qualquer informação para que possamos verificar a qualidade do hotel.\n6) Favor anexar todos os documentos no sistema.\n7) Houve contato com o FALE? Quais as tratativas?\n8) Anexar tela que comprove o nome de todos os passageiros que constam na reserva."
    },
    {
    title: "Cancelamento de voo",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Houve Cancelamento de voo (indicar o número do voo na pergunta)? Por qual o motivo? Favor anexar os documentos no sistema.\n2) Foi fornecida assistência ao passageiro? Se sim, quais?\n3) Caso tenha sido fornecida assistência, houve acomodação do pax em hotel? Se sim, indicar o nome do hotel, endereço ou qualquer informação para que possamos verificar a qualidade do hotel.\n4) Favor anexar todos os documentos no sistema.\n5) Houve contato com o FALE? Quais as tratativas?\n6) Anexar tela que comprove o nome de todos os passageiros que constam na reserva."
    },
    {
    title: "Overbooking",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Houve Overbooking (indicar o número do voo na pergunta)? O pax foi reacomodado em qual dia, hora e voo?\n2) Foi fornecida assistência ao passageiro? Se sim, quais?\n3) Caso tenha sido fornecida assistência, houve acomodação do pax em hotel? Se sim, indicar o nome do hotel, endereço ou qualquer informação para que possamos verificar a qualidade do hotel.\n4) Favor anexar todos os documentos no sistema.\n5) Foi paga alguma compensação ao pax? Caso positivo, qual o valor? Favor anexar o comprovante no sistema.\n6) Houve contato com o FALE? Quais as tratativas?\n7) Anexar tela que comprove o nome de todos os passageiros que constam na reserva."
    },
    {
    title: "Perda do voo",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) O autor perdeu o voo (indicar o número do voo na pergunta)? Por qual motivo?\n2) Foi fornecida assistência ao passageiro? Se sim, quais?\n3) Caso tenha sido fornecida assistência, houve acomodação do pax em hotel? Se sim, indicar o nome do hotel, endereço ou qualquer informação para que possamos verificar a qualidade do hotel.\n4) Favor anexar todos os documentos no sistema.\n5) Foi paga alguma compensação ao pax? Caso positivo, qual o valor? Favor anexar o comprovante no sistema.\n6) Houve contato com o FALE? Quais as tratativas?\n7) O pax foi realocado ou pagou taxa de remarcação? Caso positivo, favor indicar o novo voo, data e horário. Favor anexar os documentos no sistema.\n8) Anexar tela que comprove o nome de todos os passageiros que constam na reserva."
    },
    {
    title: "Avaria de Bagagem",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Houve avaria?\n2) Foi aberto RIB? Caso positivo, anexar cópia no sistema.\n3) Havia na bagagem identificação de frágil?\n4) Foi realizado o conserto? Caso positivo, anexar cópia do comprovante de quitação.\n5) Foi pago algum valor ao pax? Favor anexar documentos.\n6) Houve contato com o FALE? Quais as tratativas?"
    },
    {
    title: "Bagagem despachada (Paga anteriormente)",
    dependent: "SAODP03",
    content: "1) Qual o procedimento acerca da bagagem paga com antecedência?\n2) É valido o pagamento de excesso de bagagem anterior ao voo ou pagamento da bagagem despachada acrescido no valor da passagem?\n3) Possuímos documentos? Favor anexar os documentos no sistema.\n4) Houve contato com o FALE? Quais as tratativas?"
    },
    {
    title: "Transporte de Animal (exceto como cargas)",
    dependent: "EQUIPE RESERVA SAORO - BILHETE/RESERVA",
    content: "1) Houve pedido de transporte do animal?\n2) O pedido foi realizado de acordo com os termos que constam no site da cia.?\n3) Foi autorizado o transporte do animal? Dentro da cabine ou no porão?\n4) Porque não foi possível realizar a viagem com o animal?\n5) Houve contato com o FALE? Quais as tratativas?"
    },
    {
    title: "Cobrança Indevida - Compra não reconhecida pelo titular",
    dependent: "Direta (LATAM): MPCC – Anulações/Devoluções\nIndireta (Agência): Equipe Reserva SAORO – Bilhete/Reserva\nReembolso (bilhete emitido): Equipe Receita – Reembolso",
    content: "1) Qual o nome do passageiro constante na reserva adquirida com o cartão do autor?\n2) Houve contestação da compra da passagem?\n3) Houve estorno/reembolso do valor da passagem? Caso positivo, anexar os documentos que comprovem o estorno.\n4) Anexar tela que comprove o nome de todos os passageiros que constam na reserva."
    },
    {
    title: "Cobrança Indevida - Compra não finalizada e cobrada",
    dependent: "Direta (LATAM): MPCC – Anulações/Devoluções\nIndireta (Agência): Equipe Reserva SAORO – Bilhete/Reserva\nReembolso (bilhete emitido): Equipe Receita – Reembolso",
    content: "1) A compra foi finalizada? Caso negativo, qual o motivo da cobrança?\n2) Houve emissão de número de reserva e e-ticket?\n3) Foi reembolsado algum valor? Qual?\n4) Possuímos documentos?"
    },
    {
    title: "Cobrança Indevida - Cobrança em duplicidade",
    dependent: "Direta (LATAM): MPCC – Anulações/Devoluções\nIndireta (Agência): Equipe Reserva SAORO – Bilhete/Reserva\nReembolso (bilhete emitido): Equipe Receita – Reembolso",
    content: "1) A primeira compra da autora foi efetivada?\n2) A origem e destino das reservas são os mesmo?\n3) Os passageiros são os mesmo?\n4) Alguma das reservas foi cancelada?\n5) Possuímos documentos que comprovem? Favor anexar no sistema.\n6) Anexar tela que comprove o nome de todos os passageiros que constam na reserva."
    },
    {
    title: "Demora ou Reembolso não realizado",
    dependent: "EQUIPE RECEITA - REEMBOLSO",
    content: "1) Houve a solicitação de reembolso?\n2) Em qual tarifa o autor adquiriu as passagens, bem como suas regras tarifárias?\n3) Houve o reembolso de algum valor? Qual? Favor anexar o comprovante no sistema.\n4) Qual o valor cobrado de taxa no caso de cancelamento de passagem?"
    },
    {
    title: "Remarcação / Diferença Tarifária",
    dependent: "EQUIPE RESERVA SAORO - BILHETE/RESERVA",
    content: "1) A remarcação decorreu de escolha do cliente ou por fatos alheios à sua vontade?\n2) Qual é o valor para remarcação da viagem?\n3) Esse valor foi informado ao cliente?\n4) Há multa decorrente da remarcação?\n5) Houve contato com o FALE? Quais as tratativas?\n6) Anexar tela que comprove o nome de todos os passageiros que constam na reserva."
    },
    {
    title: "Extravio Temporário de Bagagem",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) A bagagem foi extraviada? Qual o número da RIB?\n2) O Extravio foi temporário ou definitivo?\n3) Quando foi o extravio e qual a data que o passageiro recebeu a bagagem?\n4) Houve compensação? Qual o valor?\n5) Se o cliente recebeu a bagagem, após a entrega, houve reporte de avaria/violação? Em caso afirmativo, qual a RIB de dano? Houve compensação referente ao dano? Favor anexar o comprovante de quitação\n6) Com qual Cia foi aberta a RIB?\n7) Houve tratativa no FALE? Por favor, faça um breve relato do que foi acordado com o passageiro.\n8) Anexar um print com todos os pax que constam na reserva.\n9) Qual o canal emissor das passagens?"
    },

    {
    title: "Excesso de Bagagem",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Qual é a franquia de bagagem permitida ao autor?\n2) Quantos quilogramas de bagagem foi excedido da franquia?\n3) Qual o valor cobrado por quilograma de excesso?\n4) Foi pago pelo pax?\n5) Possuímos documentos que comprovem a ausência de responsabilidade da TAM? Favor anexar os documentos no sistema.\n6) Houve contato com o FALE? Quais as tratativas?"
    },
    {
    title: "Violação de Bagagem",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Houve de fato a violação na bagagem?\n2) Qual o peso inicial e final da bagagem do autor?\n3) Qual o valor pago por quilograma da bagagem?\n4) Foi aberta RIB? Caso positivo, favor anexar a RIB no sistema.\n5) Houve pagamento de indenização ao pax devido a violação da bagagem? Qual o valor? Favor anexar o comprovante no sistema.\n6) Houve contato com o FALE? Quais as tratativas?"
    },
    {
    title: "Impedimento de Embarque - No Show",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Houve No show? Caso positivo, houve solicitação de reembolso pelo pax? Qual valor?\n2) Foi reembolsado algum valor? Qual valor? Em qual data? Favor anexar comprovantes no sistema.\n3) Houve contato com o FALE? Quais as tratativas?\n4) Anexar tela que comprove o nome de todos os passageiros que constam na reserva."
    },
    {
    title: "Impedimento de embarque – documentação irregular",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Qual era a documentação que o PAX portava na hora do embarque?\n2) Qual o motivo da irregularidade?\n3) O pax não conseguiu embarcar devido a essa irregularidade?\n4) O pax foi realocado ou teve que adquirir novas passagens? Caso tenha sido realocado, em qual data e voo?\n5) Havia outro tipo de documentação para ao PAX apresentar e poder embarcar?\n6) Possuímos documentos? Caso positivo, favor anexar documentos.\n7) Houve contato com o FALE? Quais as tratativas?\n8) Anexar tela que comprove o nome de todos os passageiros que constam na reserva."
    },
    {
    title: "Impedimento de Embarque – problema com a reserva",
    dependent: "EQUIPE RESERVA SAORO - BILHETE/RESERVA",
    content: "1) A reserva das passagens foram pagas e confirmadas?\n2) Qual o motivo da reserva não constar no sistema? Possuímos documentos que comprovem que não houve a reserva?\n3) O pax foi realocado pela companhia? Em qual data e voo?\n4) Anexar tela que comprove o nome de todos os passageiros que constam na reserva."
    },
    {
    title: "Problema de pontuação",
    dependent: "Multiplus - Incorporação",
    content: "1) Quais são as regras para devolução de pontos em caso de cancelamento da passagem?\n2) Qual a pontuação devolvida aos autores?\n3) Qual pontuação atual dos autores?\n4) Possuímos documentos referente ao ocorrido? Favor anexar no sistema."
    },
    {
    title: "Promoções e Propagandas",
    dependent: "SUPORTE AO SITE",
    content: "1) Houve algum problema para aquisição de passagens? Possuímos documentos que comprovem a regularidade? De fato existe essa promoção? Favor anexar os documentos no sistema."
    },
    {
    title: "Alteração de Classe",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Houve a cobrança do serviço?\n2) O pax recebeu o serviço contratado?\n3) Qual é o status do serviço?\n4) Favor confirmar em qual assento o pax voou. Favor informar se ele foi realocado em assento semelhante ou não.\n5) Por qual motivo o pax não pode voar na classe contratada?\n6) Houve reembolso do valor pago a maior pelas passagens em primeira classe/premium business?\n7) Houve contato com o FALE? Quais as tratativas?"
    },
    {
    title: "Problemas Espaço+/ Berço",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) O espaço+/berço foi adquirido?\n2) Houve pagamento da taxa? Em caso positivo, em qual valor?\n3) Favor confirmar em qual assento o pax voou? Caso realocado, o novo assento era espaço+?\n4) Haviam outros passageiros especiais no voo?\n5) Houve reembolso do valor pago pelo assento conforto? Favor anexar os documentos no sistema."
    },
    {
    title: "PNAE",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Havia necessidade de preenchimento do MEDIF? Caso positivo, foi preenchido?\n2) Quais foram as codições do embarque do PNE?\n3) Os serviços contratados foram prestados?\n4) Houve prioridade de embarque? Favor anexar documentos no sistema.\n5) Houve contato com o FALE? Quais as tratativas?"
    },
    {
    title: "Clientes com necessidades especiais",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Clientes que possuem necessidades especiais, ou que possuem casos médicos, que necessitem de uma análise para autorização de viagem, por exemplo, aqueles que precisam de maca, oxigênio, cadeira de rodas, etc. Questionamento a depender do serviço descrito na inicial, mas basicamente será questionado se há necessidade de apresentação de MEDIF? Em casos com MEDIF já informado, se houve apuração interna pela LATAM? Se o serviço solicitado foi disponibilizado?"
    },
    {
    title: "Problemas envolvendo o transporte de Cargas",
    dependent: "Cargas",
    content: "1) Houve extravio/atraso na entrega? Por qual motivo?\n2) Qual foi o serviço contratado?\n3) Teve ressalva?\n4) Houve tratativas de acordo extrajudicial? Temos documentos? Caso positivo, favor anexar no sistema.\n5) Favor informar o centro de custo."
    },
    {
    title: "Para obter informações de contato com o FALE",
    dependent: "SAODP03",
    content: "1) Houve contato com a TAM?\n2) Qual foi a orientação passada ao pax?\n3) Temos registro do contato?\n4) Por gentileza anexar docs que comprovem."
    },
    {
    title: "Alimentação Especial",
    dependent: "EQUIPE RESERVA SAORO - BILHETE/RESERVA",
    content: "1) Houve solicitação de alimentação especial?\n2) A alimentação especial solicitada foi embarcada no avião?\n3) É possível confirmar com a tripulação se a alimentação foi servida?\n4) Consta registro de reclamação do não recebimento da alimentação especial durante o voo?\n5) Houve contato com o FALE? Quais as tratativas?"
    },
    {
    title: "Casos envolvendo a TAM Viagens e suas franqueadas",
    dependent: "TAM VIAGENS",
    content: "1) Houve venda de pacote?\n2) Qual o serviço contratado?\n3) Qual o motivo da não realização do serviço?"
    },
    {
    title: "Clientes Vips",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Clientes VIPs, como fidelidades blacks, que viajavam em Primeira Classe, Autoridades, personalidades, etc e são responsáveis pelos serviços de classe executiva e Salas VIPs.\n2) Quais os serviços especiais estavam disponíveis para o cliente e se houve disponibilização, bem como utilização pelo pax?"
    },
    {
    title: "Acidente/ Incidente",
    dependent: "Aeroporto de Origem ou do Destino (a depender de onde os fatos ocorreram)",
    content: "1) Temos registro do ocorrido?\n2) Foi prestado socorro a pax? Favor anexar os documentos no sistema."
    },
    {
    title: "Quando uma agência de viagens (não a TAM Viagens) ingressa com ação contra a LATAM",
    dependent: "Financeiro",
    content: "1) A agência entrou em contato com a TAM?\n2) Tivemos algum problema no acesso da agência para gerar a passagem? Favor anexar os documentos no sistema."
    },
    {
    title: "Solicitação de Lista de PAX (ofícios e determinações judiciais)",
    dependent: "Receita Voada (pedir pela planilha e não pelo LB)",
    content: "1) Favor encaminhar a lista de pax."
    },
    {
    title: "Solicitação de Lista de PAX",
    dependent: "Bilhete/Reserva",
    content: "1) Favor encaminhar a lista de relação de voo."
    },
    {
    title: "Solicitação de Lista de PAX",
    dependent: "Multiplus - Incorporação",
    content: "1) Favor encaminhar dados cadastrais localizados no sistema."
    }
    ]};

// Carregar dados do localStorage
function loadData() {
    const saved = localStorage?.getItem?.('copyPasteData');
    if (saved) {
        try {
            data = JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao carregar dados:', e);
        }
    }
}

// Salvar dados no localStorage
function saveData() {
    try {
        localStorage?.setItem?.('copyPasteData', JSON.stringify(data));
    } catch (e) {
        console.error('Erro ao salvar dados:', e);
    }
}

// Alternar entre abas
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        switchTab(tabName);
    });
});

function switchTab(tabName) {
    // Atualizar botões das abas
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Atualizar conteúdo
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');

    currentTab = tabName;
}
//renderiza os itens
function renderItems() {
    const resumosList = document.getElementById('resumos-list');
    const pi400List = document.getElementById('pi400-list');
    const pi400VoepassList = document.getElementById('pi400Voepass-list');
    const pi100List = document.getElementById('pi100-list');

    resumosList.innerHTML = data.resumos.map((item, index) => createItemHTML(item, index, 'resumos')).join('');
    pi400List.innerHTML = data.pi400.map((item, index) => createItemHTML(item, index, 'pi400')).join('');
    pi400VoepassList.innerHTML = data.pi400Voepass.map((item, index) => createItemHTML(item, index, 'pi400Voepass')).join('');
    pi100List.innerHTML = data.pi100.map((item, index) => createItemHTML(item, index, 'pi100')).join('');
    
    // Criar navegação rápida
    createQuickNav();
}

function createQuickNav() {
    const resumosNav = document.getElementById('resumos-nav');
    const pi400Nav = document.getElementById('pi400-nav');
    const pi400VoepassNav = document.getElementById('pi400Voepass-nav');
    const pi100Nav = document.getElementById('pi100-nav');
    
    // Para resumos
    const resumosButtons = data.resumos.slice(0, 8).map((item, index) => {
        const shortTitle = item.title.split(' ')[0] || item.title.substring(0, 8);
        return `<button class="quick-nav-btn" onclick="scrollToItem('resumos', ${index})">${shortTitle}</button>`;
    }).join('');
    
    // Para PI 400
    const pi400Buttons = data.pi400.slice(0, 12).map((item, index) => {
        const shortTitle = item.title.split(' ')[0] || item.title.substring(0, 10);
        return `<button class="quick-nav-btn" onclick="scrollToItem('pi400', ${index})">${shortTitle}</button>`;
    }).join('');
    
    // Para PI 400 - VOEPASS
    const pi400VoepassButtons = data.pi400Voepass.slice(0, 12).map((item, index) => {
        const shortTitle = item.title.split(' ')[0] || item.title.substring(0, 10);
        return `<button class="quick-nav-btn" onclick="scrollToItem('pi400Voepass', ${index})">${shortTitle}</button>`;
    }).join('');
    
    // Para PI 100
    const pi100Buttons = data.pi100.slice(0, 12).map((item, index) => {
        const shortTitle = item.title.split(' ')[0] || item.title.substring(0, 10);
        return `<button class="quick-nav-btn" onclick="scrollToItem('pi100', ${index})">${shortTitle}</button>`;
    }).join('');
    
    resumosNav.innerHTML = resumosButtons;
    pi400Nav.innerHTML = pi400Buttons;
    pi400VoepassNav.innerHTML = pi400VoepassButtons;
    pi100Nav.innerHTML = pi100Buttons;
}

// Scroll para item específico
function scrollToItem(type, index) {
    const container = document.getElementById(`${type}-list`);
    const items = container.querySelectorAll('.item-group');
    if (items[index]) {
        items[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        items[index].style.background = 'rgba(79, 172, 254, 0.1)';
        setTimeout(() => {
            items[index].style.background = '';
        }, 2000);
    }
}

// Filtrar itens
function filterItems(type) {
    const searchTerm = event.target.value.toLowerCase();
    const container = document.getElementById(`${type}-list`);
    const items = container.querySelectorAll('.item-group');
    
    items.forEach(item => {
        const title = item.dataset.title;
        const content = item.dataset.content;
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function toggleCollapse(button) {
    const group = button.closest('.item-group');
    const content = group.querySelector('.item-content');

    // Alterna apenas o item clicado
    content.classList.toggle('collapsed');

    // Mantém o mesmo ícone, mas você pode mudar se quiser abrir/fechar diferente
    button.textContent = content.classList.contains('collapsed') ? '👁️' : '👁️';
}


function toggleCompact(button, type) {
    const container = document.getElementById(`${type}-list`);
    if (!container) return;

    container.classList.toggle('compact-mode');

    if (container.classList.contains('compact-mode')) {
        button.textContent = '📖 Modo Expandido';
        button.style.background = 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)';

        // No modo compacto, todos começam fechados
        container.querySelectorAll('.item-content').forEach(c => c.classList.add('collapsed'));

    } else {
        button.textContent = '📋 Modo Compacto';
        button.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';

        // No modo expandido, todos ficam abertos
        container.querySelectorAll('.item-content').forEach(c => c.classList.remove('collapsed'));
    }
}




// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar/esconder botão de scroll
window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
        scrollButton.style.display = 'flex';
    } else {
        scrollButton.style.display = 'none';
    }
});


// 1. Modificar a função createItemHTML:
function createItemHTML(item, index, type) {
    const hasDependentField = type !== 'resumos';
    
    return `
        <div class="item-group" data-title="${item.title.toLowerCase()}" data-content="${item.content.toLowerCase()}">
            <div class="item-header">
                <div class="title-container">
                    <span class="item-title">${item.title}</span>
                    ${hasDependentField && item.dependent ? 
                        `<span class="item-dependent"><img src="assets/images/arrow.png" alt="Seta" style="width:24px; height:18px; vertical-align:middle; margin-right:4px;"> ${item.dependent}</span>` : ''
                    }
                </div>
                <div class="item-buttons">
                    <button class="copy-btn" onclick="copyToClipboard('${type}', ${index})">📋 Copiar</button>
                    <button class="collapse-toggle" onclick="toggleCollapse(this)" title="Expandir/Colapsar">👁️</button>
                </div>
            </div>
            <div class="item-content">
                <div class="item-text">${item.content}</div>
            </div>
        </div>
    `;
}


// Copiar para clipboard
async function copyToClipboard(type, index) {
    const item = data[type][index];
    const button = event.target;
    
    try {
        await navigator.clipboard.writeText(item.content);
        
        // Feedback visual
        const originalText = button.innerHTML;
        button.innerHTML = '✅ Copiado!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);

        showToast('Conteúdo copiado para a área de transferência!');
    } catch (err) {
        console.error('Erro ao copiar:', err);
        showToast('Erro ao copiar conteúdo', 'error');
    }
}

// Mostrar toast
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.background = type === 'error' ? '#dc3545' : '#28a745';
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Modal
function openModal(type) {
    currentTab = type;
    editingIndex = -1;
    document.getElementById('modal-title').textContent = `Adicionar ${type === 'resumos' ? 'Resumo' : 'Questionamento'}`;
    document.getElementById('item-title').value = '';
    document.getElementById('item-content').value = '';
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function saveItem() {
    const title = document.getElementById('item-title').value.trim();
    const content = document.getElementById('item-content').value.trim();

    if (!title || !content) {
        showToast('Por favor, preencha todos os campos', 'error');
        return;
    }

    const item = { title, content };

    if (editingIndex >= 0) {
        data[currentTab][editingIndex] = item;
    } else {
        data[currentTab].push(item);
    }

    saveData();
    renderItems();
    closeModal();
    showToast(`${currentTab === 'resumos' ? 'Resumo' : 'Questionamento'} salvo com sucesso!`);
}

// Deletar item (função removida)
// function deleteItem(type, index) {
//     if (confirm('Tem certeza que deseja deletar este item?')) {
//         data[type].splice(index, 1);
//         saveData();
//         renderItems();
//         showToast('Item deletado com sucesso!');
//     }
// }

// Fechar modal clicando fora
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal')) {
        closeModal();
    }
});

// Atalhos de teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    // Reset forçado - sempre usar dados padrão
    saveData();
    renderItems();
});