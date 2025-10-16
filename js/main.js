const LATEX_FORMULAS = [
    // физические законы
    "E = mc^2",
    "F = ma",
    "\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}",
    "\\nabla \\times \\mathbf{B} - \\frac{1}{c^2} \\frac{\\partial \\mathbf{E}}{\\partial t} = \\mu_0 \\mathbf{J}",
    "\\nabla \\cdot \\mathbf{B} = 0",
    "\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}",
    "S = k_B \\ln \\Omega",
    "\\hbar \\omega = E",
    "\\mathbf{p} = \\hbar \\mathbf{k}",
    "\\lambda = \\frac{h}{p}",
    "T = \\frac{2\\pi}{\\omega}",
    "v = \\frac{dx}{dt}",
    "a = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}",
    "\\mathbf{F} = -\\nabla U",
    "\\mathcal{L} = T - V",
    "\\frac{d}{dt} \\left( \\frac{\\partial \\mathcal{L}}{\\partial \\dot{q}_i} \\right) = \\frac{\\partial \\mathcal{L}}{\\partial q_i}",
    "\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}",
    "\\tau = \\mathbf{r} \\times \\mathbf{F}",

    // классическая механика и динамика
    "K = \\frac{1}{2}mv^2",
    "U = mgh",
    "W = \\int \\mathbf{F} \\cdot d\\mathbf{r}",
    "P = \\frac{dW}{dt}",
    "I = \\int r^2 \\, dm",
    "\\tau = I \\alpha",
    "\\omega = \\omega_0 + \\alpha t",
    "\\theta = \\theta_0 + \\omega_0 t + \\frac{1}{2}\\alpha t^2",

    // электричество и магнетизм
    "V = IR",
    "P = IV = I^2 R = \\frac{V^2}{R}",
    "C = \\frac{Q}{V}",
    "U = \\frac{1}{2} C V^2",
    "L = \\frac{\\Phi_B}{I}",
    "U = \\frac{1}{2} L I^2",
    "\\mathcal{E} = -\\frac{d\\Phi_B}{dt}",
    "\\mathbf{J} = \\sigma \\mathbf{E}",

    // термодинамика
    "\\Delta U = Q - W",
    "PV = nRT",
    "C_V = \\left( \\frac{\\partial U}{\\partial T} \\right)_V",
    "C_P = \\left( \\frac{\\partial H}{\\partial T} \\right)_P",
    "\\eta = 1 - \\frac{T_C}{T_H}",
    "dS = \\frac{\\delta Q_{\\text{rev}}}{T}",

    // квантовая механика
    "\\hat{H} \\Psi = E \\Psi",
    "\\hat{p} = -i\\hbar \\nabla",
    "\\hat{x} \\psi(x) = x \\psi(x)",
    "[\\hat{x}, \\hat{p}] = i\\hbar",
    "\\langle \\psi | \\phi \\rangle = \\int \\psi^*(x) \\phi(x) \\, dx",
    "\\Psi(\\mathbf{r}, t) = \\int \\phi(\\mathbf{k}) e^{i(\\mathbf{k}\\cdot\\mathbf{r} - \\omega t)} \\, d\\mathbf{k}",
    "\\Delta x \\Delta p \\geq \\frac{\\hbar}{2}",
    "\\psi_n(x) = \\sqrt{\\frac{2}{L}} \\sin\\left(\\frac{n\\pi x}{L}\\right)",

    // математический анализ
    "\\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi}",
    "\\frac{d}{dx} e^x = e^x",
    "\\frac{d}{dx} \\ln x = \\frac{1}{x}",
    "\\frac{d}{dx} \\sin x = \\cos x",
    "\\frac{d}{dx} \\cos x = -\\sin x",
    "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1",
    "\\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = e^x",
    "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}",
    "\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s}",
    "\\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t} \\, dt",
    "\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\nabla^2 u",
    "\\nabla^2 \\phi = 0",
    "\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}",
    "\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F}) \\, dV",

    // линейная алгебра
    "\\det(\\mathbf{A}) = \\prod_{i=1}^{n} \\lambda_i",
    "\\mathbf{A} \\mathbf{v} = \\lambda \\mathbf{v}",
    "\\mathbf{A}^{-1} \\mathbf{A} = \\mathbf{I}",
    "\\|\\mathbf{x}\\| = \\sqrt{\\mathbf{x}^\\top \\mathbf{x}}",
    "\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\| \\|\\mathbf{v}\\| \\cos \\theta",
    "\\mathbf{u} \\times \\mathbf{v} = \\|\\mathbf{u}\\| \\|\\mathbf{v}\\| \\sin \\theta \\, \\mathbf{n}",

    // геометрия и тригонометрия
    "a^2 + b^2 = c^2",
    "\\sin^2 x + \\cos^2 x = 1",
    "\\tan x = \\frac{\\sin x}{\\cos x}",
    "e^{ix} = \\cos x + i \\sin x",
    "V = \\frac{4}{3}\\pi r^3",
    "A = 4\\pi r^2",
    "A = \\pi r^2",
    "C = 2\\pi r",

    // теория вероятностей и статистика
    "\\mathbb{E}[X] = \\int_{-\\infty}^{\\infty} x f(x) \\, dx",
    "\\mathrm{Var}(X) = \\mathbb{E}[(X - \\mu)^2]",
    "\\sigma = \\sqrt{\\mathrm{Var}(X)}",
    "f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}}",
    "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}",
    "\\mathrm{Cov}(X, Y) = \\mathbb{E}[(X - \\mu_X)(Y - \\mu_Y)]",
    "\\rho_{X,Y} = \\frac{\\mathrm{Cov}(X,Y)}{\\sigma_X \\sigma_Y}",
    "\\chi^2 = \\sum_{i=1}^{n} \\frac{(O_i - E_i)^2}{E_i}",

    // дифференциальные уравнения
    "\\frac{dy}{dx} + P(x)y = Q(x)",
    "\\frac{d^2y}{dx^2} + \\omega^2 y = 0",
    "\\frac{\\partial u}{\\partial t} = \\alpha \\nabla^2 u",
    "\\nabla^2 \\psi + k^2 \\psi = 0",

    // комплексные числа и специальные функции
    "z = r e^{i\\theta}",
    "\\Re(z) = \\frac{z + \\bar{z}}{2}",
    "\\Im(z) = \\frac{z - \\bar{z}}{2i}",
    "J_n(x) = \\frac{1}{\\pi} \\int_0^\\pi \\cos(n\\tau - x \\sin \\tau) \\, d\\tau"
];

function renderRandomFormula() {
    const container = document.getElementById('formulaContainer');
    if (!container) return;

    const randomLatex = LATEX_FORMULAS[Math.floor(Math.random() * LATEX_FORMULAS.length)];
    container.innerHTML = `<div class="formula-text">$$${randomLatex}$$</div>`;

    if (window.MathJax) {
        MathJax.typesetClear([container]);
        MathJax.typeset([container]);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const formulaContainer = document.getElementById('formulaContainer');
    if (formulaContainer) {
        renderRandomFormula();

        formulaContainer.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            renderRandomFormula();
        });
    }
});