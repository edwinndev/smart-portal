import laptop from '@/assets/Course/Laptop.webp'
import tablet from '@/assets/Course/Tablet.webp'
import AnsiCThumb from '@/assets/ThumbnailCourses/AnsiC.webp'


export const courses = {
  'ansi-c': {
    title: 'Diseño digital de las compuertas al procesador',
    bannerSrc: AnsiCThumb,
    laptopImage: laptop,
    tabletImage: tablet,
    description: 'Nuestra especialización cubre una amplia gama de temas, desde el manejo de periféricos hasta protocolos de comunicación, sistemas HMI, comunicaciones inalámbricas y desarrollo de proyectos reales. Aprenderás a optimizar el código, manejar la arquitectura de los microcontroladores y aplicar técnicas avanzadas para mejorar la eficiencia y el rendimiento. Te preparamos para enfrentar desafíos avanzados en el desarrollo de productos electrónicos innovadores basados en sistemas embebidos.',
    time: '48',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar Microcontroladores PIC en el nuevo ASM PIC AS XC8 y manejar las ultimas herramientas de hardware y software de microchip',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el Diseño de sistemas embebidos basados en MCUs, pero con proyectos reales en base a la alta experiencia del docente que desarrolla diversas soluciones para distintos campos de la industria',
    syllabus: [
      {
        theme: 'Diseño de sistemas embebidos',
        topics: [
          'Aplicaciones de Sistemas Embebidos',
          'Comparación entre Microprocesadores, Microcontroladores y SOC',
          'Arquitectura de Microchip en 8, 16 y 32 Bits',
          'Diferencias entre Assembler y ANSI C',
          'Clasificación y arquitectura de Microcontroladores de 8 bits',
          'Análisis de memoria de programa, memoria de datos RAM y arquitectura ortogonal de Microchip, así como aprendizaje de instrucciones de carga a W aritméticos y booleanos'
        ]
      },
      {
        theme: 'Set de instrucciones',
        topics: [
          'Manejo de la memoria RAM y direccionamiento de bancos',
          'Instrucciones de aprendizaje con memoria RAM',
          'Instrucciones booleanas orientadas al byte',
          'Instrucciones de comparación para bits y bytes',
          'Instrucciones aritméticas para bytes',
          'Instrucciones de salto, rotación, incremento y decremento para bytes'
        ]
      },
      {
        theme: 'Arquitectura PIC18',
        topics: [
          'Series de los Microcontroladores PIC18FXXXXX',
          'Características del nuevo ensamblador de Microchip',
          'Organización del código fuente en ensamblador',
          'Análisis del microcontrolador PIC18F45K50',
          'Manejo del Program Counter (PC).',
          'Configuración del periférico GPIO y uso de MPLAB X con el depurador integrado, incluyendo ejercicios prácticos con Proteus y el PIC18F45K50'
        ]
      },
      {
        theme: 'Subrutinas y diseño de librerías',
        topics: [
          'Directivas del nuevo Ensamblador XC8',
          'Manejo de subrutinas y subrutinas anidadas',
          'Aprendizaje de instrucciones con la PILA LIFO',
          'Análisis de la frecuencia y tiempo de ciclo de instrucción, MIPS, frecuencia de reloj y ciclo-máquina',
          'Diseño de retardos por software',
          'Implementación de un programa "Hola Mundo" para el PIC18F45K50 con un LED parpadeante, manejo de un Display de 7 Segmentos y diseño de librerías para el control de distintos periféricos y recursos del microcontrolador'
        ]
      },
      {
        theme: 'Manejo de tablas',
        topics: [
          'Implementación de rutinas para lectura y escritura en la memoria flash',
          'Aprendizaje de las nuevas directivas del PIC AS',
          'Técnica de la Multiplexación de datos',
          'Manejo del Display de 7 segmentos multiplexado',
          'Desarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Ejercicios prácticos con tablas y contadores'
        ]
      },
      {
        theme: 'Pantalla LCD y teclado matricial 4x4',
        topics: [
          'Diseño de la librería para la pantalla LCD',
          'Implementación de la librería para la pantalla LCD',
          'Diseño de la librería para el manejo del teclado matricial 4x4',
          'Implementación de la librería para el manejo del teclado matricial 4x4',
          'Pruebas y depuración',
          'Documentación y ejemplos de uso'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Sistema de control de acceso por teclado matricial",
      "Sistema de control y monitoreo para un semáforo inteligente",
      "Diseño de un sistema de parqueo para automóviles",
      "Controlador de velocidad para motores DC",
      "Sistema de monitoreo meteorológico",
      "Sistema de adquisición de datos HMI",
      "Sistema de monitoreo/control por bluetooth y red celular"
    ]
  }
}