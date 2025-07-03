# AlphaFold: Revolucionando la predicción de estructuras de proteínas

**Autores:** John Jumper, Richard Evans, Alexander Pritzel, et al. (DeepMind)  


## ¿De qué va este paper?

AlphaFold es básicamente el momento en que la inteligencia artificial resolvió uno de los problemas más complicados de la biología: predecir cómo se pliega una proteína solo conociendo su secuencia de aminoácidos.

## Lo que me voló la cabeza

### El problema que atacaron
Por más de 50 años, los científicos intentaron resolver el "protein folding problem". Las proteínas son como origami molecular - una secuencia lineal de aminoácidos que se pliega en una estructura 3D específica. Y esa estructura determina completamente qué hace la proteína.

Antes de AlphaFold, predecir esta estructura era casi imposible sin usar métodos experimentales que toman meses o años.

### Los números que impresionan
- **Precisión**: 0.96 Å de error promedio (un átomo de carbono mide ~1.4 Å)
- **CASP14**: Arrasaron en la competencia más importante de predicción de estructuras
- **Escalabilidad**: Funciona hasta en proteínas de 2,180 residuos

### La arquitectura que cambió todo
No es solo "más deep learning". Combinaron:
- **Conocimiento evolutivo**: Usan alineaciones múltiples de secuencias relacionadas
- **Física**: Incorporan restricciones físicas y biológicas conocidas
- **Attention mechanisms**: Para capturar relaciones entre aminoácidos distantes

## Por qué esto es gigante

1. **Velocidad**: De meses/años a horas/días
2. **Cobertura**: Millones de proteínas vs las ~100,000 estructuras conocidas
3. **Descubrimiento de drogas**: Acelera el diseño de medicamentos
4. **Comprensión biológica**: Entender enfermedades a nivel molecular

## Lo que me quedó dando vueltas

¿Cómo es que combinaron tan bien el conocimiento domain-specific (biología) con deep learning? La mayoría de modelos de ML son black boxes, pero acá realmente entendieron el problema biológico.

También me impresiona que hayan liberado la base de datos completa con estructuras predichas. Eso es ciencia abierta en serio.

## Para seguir leyendo

- El paper original tiene videos increíbles del proceso de plegado
- La base de datos AlphaFold está disponible públicamente
- Vale la pena ver las aplicaciones que siguieron al paper

---

*Este análisis es súper básico comparado con la profundidad del paper. Después voy a hacer uno más completo cuando tenga más tiempo para procesarlo bien.* 