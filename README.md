# 🌮 App Tacos — Sistema POS Profesional
 
Sistema completo de punto de venta para taquería.  
Backend: **TypeScript + Node.js + Express**  
Frontend: **React + Tailwind CSS**  
Base de datos: **SQLite (offline, local)**
 
---
 
## Estructura del proyecto
 
```
app-tacos/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   └── init.ts          ← Conexión e inicialización SQLite
│   │   ├── routes/
│   │   │   ├── products.ts      ← GET /products, POST /products, DELETE /products/:id
│   │   │   └── sales.ts         ← POST /sales, GET /sales, GET /sales/report, GET /sales/balance
│   │   └── index.ts             ← Servidor Express
│   ├── db/
│   │   └── sales.db             ← Generado automáticamente
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── pages/
    │   │   ├── Vender.jsx       ← Pantalla de venta con carrito
    │   │   ├── Balance.jsx      ← Fondo de caja, métricas, top productos
    │   │   ├── Historial.jsx    ← Últimas ventas con pago y cambio
    │   │   ├── Reporte.jsx      ← Reporte diario por producto
    │   │   └── Productos.jsx    ← Gestión de productos
    │   ├── components/
    │   │   ├── Numpad.jsx       ← Teclado numérico táctil (cantidad)
    │   │   └── Cobro.jsx        ← Modal de cobro con cambio
    │   ├── api.js               ← Llamadas al backend
    │   ├── App.jsx
    │   └── index.js
    ├── package.json
    └── tailwind.config.js
```
 
---
 
## Instalación
 
### Backend
```bash
cd backend
npm install
npm run dev        # http://localhost:3001
```
 
### Frontend (otra terminal)
```bash
cd frontend
npm install
npm start          # http://localhost:3000
```
 
---
 
## Endpoints
 
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/products` | Lista productos |
| POST | `/products` | Crear producto |
| DELETE | `/products/:id` | Eliminar producto |
| POST | `/sales` | Registrar venta |
| GET | `/sales` | Historial (últimas 50) |
| GET | `/sales/report?date=YYYY-MM-DD` | Reporte diario |
| GET | `/sales/balance?date=YYYY-MM-DD` | Balance completo del día |
| GET | `/config` | Obtener fondo de caja |
| PUT | `/config` | Actualizar fondo de caja |
 
---
 
## Productos iniciales
 
| Producto | Precio |
|----------|--------|
| Taco | $15.00 |
| Jugo de Naranja | $22.00 |
| Jugo de Zanahoria | $20.00 |
| Tamarindo | $10.00 |
 
Fondo de caja inicial: **$300.00**
