# Chapter 1: 初等积分法

## 基本概念

### 方程

方程，即含有未知量的等式，根据未知量的不同可以分为：

  - 数字：代数方程、分式方程、丢番图方程、差分方程……

  - 函数：曲线/曲面方程、微分方程、积分方程……（其中单变量微分方程即我们所学的常微分方程，多变量方程是偏微分方程）

若无特殊说明，我们约定下文提到的方程均为常微分方程。

> 解方程的基本步骤是：
>
> 1 识别：需要识别出方程的形式
>
> 1.5 转化 (optional) ：有些方程不能直接求解，需要通过变量替换或其他方法转化为可求解的形式
>
> 2 求解：选用合适的方法解方程

### 常微分方程

我们一般见到的常微分方程形如：

$$
F(x, y, y', y'', \ldots, y^{(n)})=0
$$

其中涉及的导数最高阶数 $n$ 称为方程的阶。

#### 一般形式

隐式：

$$
F(x, y, \frac{dy}{dx}, \frac{d^2y}{dx^2}, \ldots, \frac{d^ny}{dx^n})=0
$$

显式：

$$
\frac{d^ny}{dx^n} = f(x, y, y', y'', \ldots, y^{(n-1)})
$$

#### 解、积分及其几何意义

为方便书写，以一阶常微分方程为例。

(1) 解：

设 $y = \varphi(x)$ 在某区间 $(a, b)$ 内连续且有连续的一阶导数，且在该区间内满足：

$$
F(x, \varphi(x), \varphi'(x)) \equiv 0 \quad \text{或} \quad \varphi'(x) \equiv f(x, \varphi(x))
$$

则称 $y = \varphi(x)$ 为上述一阶常微分方程的一个解，而区间 $(a, b)$ 称为解的定义区间。

(2) 积分：

若关系式 $\Phi(x, y) = 0$ 所能确定的函数 $y = \varphi(x)$ 为方程的一个解，则称 $\Phi(x, y) = 0$ 为该方程的一个积分。

其平面几何的表示称为该方程的积分曲线。

(3) 几何意义：

积分曲线上每一点与方向场相切，其切线斜率 (方向) 即为方程显式形式中的 $f(x, y)$ 。

#### 唯一解条件

$$
\left\{
\begin{aligned}
& \frac{dy}{dx} = f(x, y) \\
& y \Big|_{x = x_0} = y_0\\
\end{aligned}
\right.
$$

其中 $y|_{x = x_0} = y_0$ 称为初值条件，$n$ 阶方程需要有 $n$ 个初值条件来限定唯一解。

## 可分离变量方程与齐次方程

### 可分离变量方程

我们先来解决一类比较简单的常微分方程：

$$
\frac{dy}{dx} = \varphi(x)\psi(y)
$$

(a) 若 $\psi(y) \neq 0$，则可将方程改写为：

$$
\frac{dy}{\psi(y)} = \varphi(x) dx
$$

两边积分得：

$$
\int \frac{dy}{\psi(y)} = \int \varphi(x) dx
$$

这就是可分离变量方程的通解。

(b) 若 $\exists \psi(y^*) = 0$，则 $y = y^*$ 是方程的一个常数解，可能可以与上面得到的通解合并。

### 齐次方程

我们称形如下式的方程为齐次方程。

$$
\left\{
\begin{aligned}
& \frac{dy}{dx} = f(x, y) = g(\frac{y}{x}) \\
& y \Big|_{x = x_0} = y_0 \\
\end{aligned}
\right.
$$

解方程如下：(解法 1.1)

> 令 $u = \frac{y}{x}$，则 $y = ux$，$\frac{dy}{dx} = u + x\frac{du}{dx}$
>
>代入原方程得：
>
>$$u + x\frac{du}{dx} = g(u)$$
>
>整理得：
>
>$$x\frac{du}{dx} = g(u) - u \quad \Rightarrow \quad \frac{du}{dx} = \frac{g(u) - u}{x}$$
>
>可以分离为：
>
>$$\frac{du}{g(u) - u} = \frac{dx}{x}$$
>
>同时我们注意到存在特解：$g(u^*) = u^*$，即 $y = u^*x$，代入初值条件得：
>
>$$u^* = \frac{y_0}{x_0} \quad \text{或} \quad x_0 = y_0 = 0$$

接下去我们还将考虑一类更加复杂的方程：

$$
\frac{dy}{dx} = f(\frac{a_1x+b_1y+c_1}{a_2x+b_2y+c_2})
$$

(1) 若 $c_1 = c_2 = 0$，代入原方程得：

> $$ \frac{dy}{dx} = f(\frac{a_1+b_1\frac{y}{x}}{a_2+b_2\frac{y}{x}})$$
>
> 参照上面的解法 1.1 ，令 $u = \frac{y}{x}$，得：
>
> $$ \frac{du}{dx} + u = f(\frac{a_1+b_1u}{a_2+b_2u})=g(u)$$
>
> 进而我们能够解出方程。

(2) 若 $c_1$ 与 $c_2$ 不同时为 $0$，解法将稍有区别：(解法 1.2)

> 先解方程：
>
> $$ 
> \left\{
> \begin{aligned}
> & a_1x + b_1y = -c_1 \\
> & a_2x + b_2y = -c_2 \\
> \end{aligned}
> \right.
> $$
>
> $(i)$ 若 $\begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix} \neq 0$ ，
>
> > $$\frac{dy}{dx} = f(\frac{a_1(x-x^*)+b_1(y-y^*)}{a_2(x-x^*)+b_2(y-y^*)})$$
> >
> > 令 $u = \frac{y - y^*}{x - x^*}$ ，即 $y = u(x-x^*)+u$ ，参照解法 1.1 即可。
> 
> $(ii)$ 若 $\begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix} = 0$ ，
> 
> > 令 $\frac{a_1}{a_2} = \frac{b_1}{b_2} = k$ ，则：
> > 
> > $$\frac{dy}{dx} = f(\frac{k(a_2 x + b_2 y )+c_1}{a_2 x + b_2 y + c_2})$$
> >
> > 令 $u = a_2 x + b_2 y$ ，即 $y = \frac{u - a_2 x}{b_2}$ ，则：
> > 
> > $$\frac{dy}{dx} = \frac{1}{b_2}u' - \frac{a_2}{b_2} = f(\frac{k u + c_1}{u + c_2}) = g(u)$$
> >
> > $$\Rightarrow \frac{du}{dx} = a_2 + b_2 g(u) = a_2(1+ \frac{b_2}{a_2}g(u))$$
> >
> > 这样就分离成功了。

## 一阶线性微分方程与伯努利方程

### 一阶线性微分方程

> 这里的线性指的是：$y$ 及其导数的次数均为 0 或 1 次。

一阶线性微分方程的一般形式为：

$$
\frac{dy}{dx} + p(x)y = f(x)
$$

要求 $p(x), f(x)$ 在某开区间内连续。

#### 一阶齐次线性方程

当 $f(x) = 0$ 时，一阶线性微分方程变为：

$$
\frac{dy}{dx} + p(x)y = 0
$$

参照解法 1.1 分离积分即可，通解为：

$$
y(x) = C e^{-\int p(x) dx}
$$

其中 $C$ 为任意常数。

#### 一阶非齐次线性方程

对于一般的 $f(x)$，我们采取**常数变易法**，这是求解非齐次线性方程的重要方法。

解方程如下：(解法 1.3)

> 替换齐次通解的常数 $C$ 为函数 $u(x)$，即：
>
> $$y = u(x) e^{-\int p(x) dx}$$
>
> $$\frac{dy}{dx} = u'(x) e^{-\int p(x) dx} - u(x) p(x) e^{-\int p(x) dx}$$
>
> 代入原方程得：
>
> $$u'(x) e^{-\int p(x) dx} - u(x) p(x) e^{-\int p(x) dx} + p(x) u(x) e^{-\int p(x) dx} = f(x)$$
>
> 整理得：
>
> $$u'(x) e^{-\int p(x) dx} = f(x)$$
>
> 两边积分得：
>
> $$u(x) = \int f(x) e^{\int p(x) dx} dx + C$$
>
> 因此，一阶非齐次线性方程的通解为：
>
> $$y(x) = \left( \int f(x) e^{\int p(x) dx} dx + C \right) e^{-\int p(x) dx}$$

### 伯努利方程

一般地，我们称形如下式的方程为伯努利方程：

$$
\frac{dy}{dx} + p(x)y = f(x)y^n
$$

其中 $n$ 为常数，且 $n \neq 0, 1$。

采用**变量替换法**解方程如下：(解法 1.4)

> 令 $z = y^{1-n}$，则 $\frac{dz}{dx} = (1-n)y^{-n}\frac{dy}{dx}$
>
> 代入原方程得：
>
> $$\frac{1}{1-n}\frac{dz}{dx} + p(x)z = f(x)$$
>
> 这是一个一阶线性微分方程，参考解法 1.3 求解即可。

## 全微分方程

我们可以将一阶方程 $\frac{dy}{dx} = f(x, y)$ 改写为：

$$
f(x, y)dx - dy = 0
$$

类似地，我们将探讨形如下式的方程如何求解：

$$
M(x, y)dx + N(x, y)dy = 0
$$

### 情形 1

如果 $M(x, y) = \frac{\partial u}{\partial x}$，$N(x, y) = \frac{\partial u}{\partial y}$，其中 $u = u(x, y)$ 是某个可微函数，则该方程称为全微分方程。

此时，原方程可以写成：

$$
\frac{\partial u}{\partial x}dx + \frac{\partial u}{\partial y}dy = 0
$$

即：

$$
du = 0
$$

因此，通解为：

$$
u(x, y) = C = u(x_0, y_0)
$$

因而，$M(x, y)dx + N(x, y)dy = 0$ 为全微分方程的充要条件为：

$$
\frac{\partial M}{\partial y} \equiv \frac{\partial N}{\partial x} = \frac{\partial^2 u}{\partial x \partial y}
$$

解方程如下：(解法 1.5)

> 第一步：
>
> $$\frac{\partial u}{\partial x} = M(x, y)$$
>
> 因此,
>
> $$u(x, y) = \int M(x, y) dx + \varphi(y)$$
> 
> 其中 $\varphi(y)$ 是仅依赖于 $y$ 的函数。
>
> $$\therefore \frac{\partial u}{\partial y} = \frac{\partial}{\partial y} \left( \int M(x, y) dx + \varphi(y) \right) = \frac{\partial}{\partial y} \int M(x, y) dx + \varphi'(y)$$
>
> 由 $N(x, y) = \frac{\partial u}{\partial y}$，得：
>
> $$N(x, y) = \frac{\partial}{\partial y} \int M(x, y) dx + \varphi'(y)$$
>
> 从而：
>
> $$\varphi'(y) = N(x, y) - \frac{\partial}{\partial y} \int M(x, y) dx$$
>
> 积分得：
>
> $$\varphi(y) = \int \left( N(x, y) - \frac{\partial}{\partial y} \int M(x, y) dx \right) dy + C$$
>
> 因此，全微分方程的通解为：
>
> $$u(x, y) = \int M(x, y) dx + \int \left( N(x, y) - \frac{\partial}{\partial y} \int M(x, y) dx \right) dy + C$$

解方程小技巧是：

(i) 分项组合，拆分出 $\varphi(x) dx + \psi(y) dy$

(ii) 凑微分，熟悉微分形式，如：

$$
xdy+ydx = d(xy) \quad \frac{ydx-xdy}{y^2} = d(\frac{x}{y})
$$

### 情形 2

如果 $M(x, y)$ 和 $N(x, y)$ 不满足情形 1 ，但存在一个积分因子 $\mu(x, y)$，使得 $\mu(x, y)M(x, y)dx + \mu(x, y)N(x, y)dy = 0$ 是全微分方程。

$$
\therefore \frac{\partial \mu M}{\partial y} = \frac{\partial \mu N}{\partial x}
$$

拆开微分并整理得：

$$
N\frac{\partial \mu}{\partial x} - M\frac{\partial \mu}{\partial y} = \mu \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right)
$$

因此我们解方程的关键是寻找积分因子，解方程如下：(解法 1.5)

> (1) $\mu \equiv \mu(x)$，与 $y$ 无关则：
>
> $$\frac{\partial \mu}{\partial x} = \frac{M'_y - N'_x}{N}\mu$$
>
> 这是一个一阶齐次线性方程，$p(x)$ 只依赖于 $x, \varphi(x)$ ，参考解法 1.1 即可。
>
> (2) $\mu \equiv \mu(y)$，与 $x$ 无关则：
>
> $$\frac{\partial \mu}{\partial y} = \frac{M'_y - N'_x}{-M}\mu$$
>
> 这也是一个一阶齐次线性方程，$p(y)$ 只依赖于 $\psi(y)$ ，参考解法 1.1 即可。

## 可降阶的二阶微分方程

$$
\left\{
\begin{aligned}
&\frac{d^2y}{dx^2} = f(x, y, \frac{dy}{dx}) \\
&y(x_0) = y_0, \quad y'(x_0) = y_0'
\end{aligned}
\right.
$$

核心思想是**变量代换**

### 情形 1

如果方程中只含 $y''$，即：

$$
\frac{d^2y}{dx^2} \equiv f(x)
$$

则只需积分两次即可：

> $$ \frac{dy}{dx} = \int f(x) dx + C_1 $$

> $$ y = \int \left( \int f(x) dx \right) dx + C_1 x + C_2 $$

### 情形 2

如果方程中不显含 $y$，即：

$$
\frac{d^2y}{dx^2} = f(x, \frac{dy}{dx})
$$

则通过变量代换 $p = \frac{dy}{dx}$，可将二阶方程转化为一阶方程：

> $$ \frac{dp}{dx} = f(x, p) $$
>
> 可以通过求解这个一阶方程来得到 $p(x)$，然后积分得到 $y(x)$。
>
> 若求解得到：
> 
> $$ p(x) = \varphi(x, C_1) $$
>
> 则：
>
> $$ y = \int \varphi(x, C_1) dx + C_2 $$

### 情形 3

如果方程中不显含 $x$，即：

$$
\frac{d^2y}{dx^2} = f(y, \frac{dy}{dx})
$$

则通过变量代换 $p = \frac{dy}{dx}$：

> $$ \frac{d^2y}{dx^2} = \frac{dp}{dx} = \frac{dp}{dy}\frac{dy}{dx} = p\frac{dp}{dy} $$
>
> 则：
>
> $$ p\frac{dp}{dy} = f(y, p) $$
>
> 以 $y$ 为自变量求解得：
>
> $$ p = \varphi(y) = \frac{dy}{dx} $$
>
> 分离变量求解即可。

注：这类方程又被叫做“自治方程”，具有平移不变性。